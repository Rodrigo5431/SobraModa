import axios from "axios";
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
import { useNavigation } from "@react-navigation/native";

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
  const [erro, setErro] = useState<string>("");
  const [erroSenha, setErroSenha] = useState<string>("");
  const [users, setUsers] = useState<PropsUser[]>([]);
  const navigation = useNavigation();

  // Função para buscar usuários cadastrados
  const handleSearchUsers = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/cadastrar"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Não foi possível buscar usuários:", error);
    }
  };

  useEffect(() => {
    handleSearchUsers(); // Busca usuários ao carregar a tela
  }, []);

  // Função para criar usuário
  const createUsers = async (): Promise<boolean> => {
    if (
      !nome.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
      return false;
    }

    if (!imageUri) {
      Alert.alert("Erro", "É necessário adicionar uma foto.");
      return false;
    }

    if (password !== confirmPassword) {
      setErroSenha("As senhas não coincidem");
      Alert.alert("Erro", "As senhas não coincidem.");
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

      if (response.status === 201) {
        Alert.alert("Sucesso", "Cadastro realizado!");
        setNome("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setImageUri(null);
        handleSearchUsers(); // Atualiza lista de usuários
        return true; // Cadastro realizado com sucesso
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      Alert.alert("Erro", "Erro ao cadastrar usuário. Tente novamente mais tarde.");
    }

    return false; // Cadastro falhou
  };

  // Função para verificar e-mail e iniciar o cadastro
  const handleEmailVerification = async () => {
    if (!imageUri) {
      Alert.alert("Erro", "É necessário adicionar uma foto.");
      return;
    }
  
    const resultado = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
  
    if (resultado) {
      Alert.alert(
        "E-mail já cadastrado",
        "Este e-mail já existe em nossa base. Faça seu Login."
      );
      navigation.navigate("Login"); 
      return;
    }
  
    const sucesso = await createUsers();
  
    if (sucesso) {
      navigation.navigate("Login"); 
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.tituloPrincipal}>Cadastro</Text>

        {/* Caixa para adicionar imagem */}
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

        <TouchableOpacity>
          <View style={styles.button}>
            <ButtonMain
              title="FINALIZAR"
              propsBackgroundColor="#342142"
              handleFunction={handleEmailVerification}
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
