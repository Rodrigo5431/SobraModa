import axios, { AxiosError } from "axios";  // Importe o tipo AxiosError
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

export const Cadastro = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erro, setErro] = useState<string>("");
  const [erroSenha, setErroSenha] = useState<string>("");
  const [users, setUsers] = useState<PropsUser[]>([]);

  const UPLOAD_PRESET = "agoraVai"; // Substitua com seu upload preset correto!
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/deb585wpe/image/upload";

  const createUsers = async () => {
    if (
      !nome.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !imageUri
    ) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha todos os campos."
      );
      return;
    }

    if (password === confirmPassword) {
      try {
        console.log("Iniciando o upload da imagem para o Cloudinary...");

        // Primeiro, faça o upload da imagem para o Cloudinary
        const formData = new FormData();
        const file = {
          uri: imageUri,
          type: 'image/jpeg', // Ajuste o tipo conforme o tipo da sua imagem
          name: 'foto_usuario.jpg',
        };
        formData.append('file', file as any);
        formData.append('upload_preset', UPLOAD_PRESET);

        // Envia a imagem para o Cloudinary
        const cloudinaryResponse = await axios.post(
          CLOUDINARY_URL,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );

        if (cloudinaryResponse.data.secure_url) {
          const imageUrl = cloudinaryResponse.data.secure_url;
          console.log("Imagem carregada com sucesso! URL:", imageUrl);

          // Envia os dados do usuário para a API
          const userData = {
            nome,
            email,
            password,
            Foto: imageUrl,
          };

          const response = await axios.post(
            "https://673e81080118dbfe860b784d.mockapi.io/cadastrar",
            userData
          );

          if (response.status === 201) {
            Alert.alert("Sucesso", "Cadastro realizado!");
            setNome("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setImageUri(null);
          } else {
            console.error("Erro ao cadastrar usuário:", response);
            Alert.alert("Erro", "Erro ao cadastrar usuario");
          }
        } else {
          throw new Error("Erro ao obter a URL da imagem do Cloudinary.");
        }
      } catch (error: unknown) {
        // Verificando se o erro é do tipo AxiosError
        if (axios.isAxiosError(error)) {
          console.error("Erro Axios:", error.response?.data);
          Alert.alert("Erro", `Erro ao cadastrar usuario: ${error.response?.data}`);
        } else {
          console.error("Erro desconhecido:", error);
          Alert.alert("Erro", "Erro desconhecido ao tentar cadastrar.");
        }
      }
    } else {
      setErroSenha("As senhas não coincidem")
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

  const handleEmailVerification = () => {
    const resultado = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (resultado) {
      setErro("email ja existente");
    } else {
      createUsers();
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
            {erro && (
              <View>
                <Text style={{ color: "red" }}>{erro}</Text>
              </View>
            )}
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Senha:</Text>
            <TextInputField
              placeHolder="Digite sua senha"
              handleFunctionInput={setPassword}
              valueInput={password}
              />
              {erroSenha && (
                <View>
                  <Text style={{ color: "red" }}>{erroSenha}</Text>
                </View>
              )}
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Confirma a senha:</Text>
            <TextInputField
              placeHolder="Confirme a senha"
              handleFunctionInput={setConfirmPassword}
              valueInput={confirmPassword}
            />
          </View>
        </View>

        <View style={styles.button}>
          <ButtonMain
            title="FINALIZAR"
            propsBackgroundColor="#342142"
            handleFunction={handleEmailVerification}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
