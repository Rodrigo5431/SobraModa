import { Loading } from "@/components/Loading";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; // Importe o tipo AxiosError
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { ButtonMain } from "../../components/ButtonMain";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";

interface PropsUser {
  id: number;
  nome: string;
  email: string;
  password: string;
  Foto: string;
}

export default function Cadastro() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState<string>("");
  const [erroSenha, setErroSenha] = useState<string>("");
  const [erroFoto, setErroFoto] = useState<string>("");
  const [sucess, setSucess] = useState<string>("");
  const [users, setUsers] = useState<PropsUser[]>([]);

  const navigation = useNavigation();


  const arrowBackToLogin = () => {
    navigation.navigate("Login");
  };

  const UPLOAD_PRESET = "agoraVai";

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/deb585wpe/image/upload";

  const arrowBackToLogin = () => {
    navigation.navigate("Login");
  };


  const createUsers = async () => {
    if (
      !nome.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {

      return false;
    }
    try {
      const newUser = {
        nome,
        email,
        password,
        Foto: imageUri,
      };

      const response = await axios.post(
        "https://673e81080118dbfe860b784d.mockapi.io/cadastrar",
        newUser
      );
      setIsLoading(false);
      if (response.status === 201) {
        setNome("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErro("");
        setErroFoto("");
        setErroSenha("");
        setImageUri(null);
        handleSearchUsers();
        setSucess("Conta criada com sucesso");

        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
        return true;
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      Alert.alert(
        "Erro",
        "Erro ao cadastrar usuário. Tente novamente mais tarde."
      );
    }
    return false;
  };

  const handleEmailVerification = async () => {
    if (!imageUri) {
      setIsLoading(false); // Garantir que o loading seja parado imediatamente
      setErroFoto("É necessário adicionar uma foto");
      setErroSenha("");
      setErro("");
      return;
    }

    const resultado = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    try {
      if (!resultado) {
        if (password === confirmPassword) {
          setIsLoading(true);
          try {
            // Primeiro, faça o upload da imagem para o Cloudinary
            const formData = new FormData();
            const file = {
              uri: imageUri,
              type: "image/jpeg", // Ajuste o tipo conforme o tipo da sua imagem
              name: "foto_usuario.jpg",
            };
            formData.append("file", file as any);
            formData.append("upload_preset", UPLOAD_PRESET);

            // Envia a imagem para o Cloudinary
            const cloudinaryResponse = await axios.post(
              CLOUDINARY_URL,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            );

            if (cloudinaryResponse.data.secure_url) {
              const imageUrl = cloudinaryResponse.data.secure_url;
              console.log("Imagem carregada com sucesso! URL:", imageUrl);
              await createUsers(); // Aguarda a criação do usuário
            } else {
              throw new Error("Erro ao obter a URL da imagem do Cloudinary.");
            }
          } catch (error) {
            console.log("Erro ao carregar a imagem: ", error);
            setIsLoading(false); // Para o loading em caso de erro
          }
        } else {

          setIsLoading(false);
          setErroSenha("As senhas não coincidem");
          setErro("");
          setErroFoto("");
        }
      } else {
        setIsLoading(false);
        setErro("Este e-mail já existe em nossa base. Faça seu Login.");
        setErroSenha("");
        setErroFoto("");
        // setEmailExistente(
        //   "Este e-mail já existe em nossa base. Faça seu Login."
        // );
        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
      }
    } catch (error) {
      setIsLoading(false); // Para o loading em caso de erro
      console.log("Erro na verificação do email:", error);
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão negada",
        "Você precisa dar permissão para acessar a galeria."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]?.uri) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSearchUsers = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/cadastrar"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("nao foi possivel achar usuarios");
    }
  };
  useEffect(() => {
    handleSearchUsers();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <View style={styles.arrowLogin}>
          <TouchableOpacity onPress={arrowBackToLogin}>
            <Icon name="arrow-back-outline" type="ionicon" color={"#342142"} />
          </TouchableOpacity>
        </View>

        <Text style={styles.tituloPrincipal}>Cadastro</Text>

        <TouchableOpacity
          style={[styles.caixa, imageUri ? styles.imageBoxWithImage : {}]}
          onPress={pickImage}
        >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.imageInsideBox} />
          ) : (
            <Icon
              name="camera-outline"
              type="ionicon"
              size={36}
              color="#342142"
            />
          )}
          <Text style={styles.msg}>Adicionar Foto</Text>
        </TouchableOpacity>
        {erroFoto && <Text style={{ color: "red" }}>{erroFoto}</Text>}
        {sucess && <Text style={{ color: "green", fontSize: 15}}>{sucess}</Text>}
        <View style={styles.inputBox}>
          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Nome:</Text>
            <TextInputField
              placeHolder="Digite seu nome"
              handleFunctionInput={setNome}
              valueInput={nome}
            />
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Email:</Text>
            <TextInputField
              placeHolder="Digite seu email"
              handleFunctionInput={setEmail}
              valueInput={email}
            />
            {erro && <Text style={{ color: "red" }}>{erro}</Text>}
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Senha:</Text>
            <TextInputField
              placeHolder="Digite sua senha"
              handleFunctionInput={setPassword}
              valueInput={password}
            />
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Confirmar senha:</Text>
            <TextInputField
              placeHolder="Confirme a senha"
              handleFunctionInput={setConfirmPassword}
              valueInput={confirmPassword}
            />
            {erroSenha && <Text style={{ color: "red" }}>{erroSenha}</Text>}
          </View>
        </View>

        <View style={styles.button}>
          <ButtonMain
            title="FINALIZAR"
            propsBackgroundColor="#342142"
            handleFunction={() => {
              handleEmailVerification();
            }}
          />
        </View>
        {isLoading && <Loading />}
      </View>
    </TouchableWithoutFeedback>
  );
}
