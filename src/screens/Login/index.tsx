import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import logo from "../../../assets/iconeSM.png";
import { ButtonMain } from "../../components/ButtonMain";
import { ButtonSocial } from "../../components/ButtonSocial";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface PropsInf {
  id: number;
  foto: string;
  nome: string;
  email: string;
  password: string;
}

export const Login = () => {
  const navigation = useNavigation();

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<PropsInf[]>([]);
  const { handleLogin } = useAuth();

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setSenha(value);
  };

  const handleVerifyLogin = () => {
    const resultado = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === senha
    );

    if (resultado) {
      handleLogin(resultado);
      setSuccess(true);
      setError("");

      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    } else {
      setError("Usuário ou senha inválidos!");
      setSuccess(false);
    }
  };

  const searchUser = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/cadastrar"
      );

      if (response.status === 200) {
        setUsers(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  useEffect(() => {
    searchUser();
  }, []);

  const handleRegister = () => {
    navigation.navigate("Cadastrar");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.tituloPrincipal}>Seja Bem-Vindo</Text>

        <View style={styles.boxForms}>
          <TextInputField
            placeHolder="Digite seu email..."
            handleFunctionInput={handleEmail}
            valueInput={email}
            typeIcon="person"
          />

          <TextInputField
            placeHolder="Digite sua senha..."
            handleFunctionInput={handlePassword}
            valueInput={senha}
            typeInput={true}
            typeIcon="password"
          />

          <ButtonMain
            title="Entrar"
            handleFunction={handleVerifyLogin}
            propsBackgroundColor="#342142"
          />

          <View style={styles.linha} />

          <ButtonSocial
            title="Entrar com o Facebook"
            icon="logo-facebook"
            propsType="ionicon"
          />

          <ButtonSocial
            title="Entrar com o Google"
            icon="logo-google"
            propsType="ionicon"
          />

          <ButtonSocial
            title="Iniciar sessão com a Apple"
            icon="logo-apple"
            propsType="ionicon"
          />

          <View style={styles.cadastro}>
            <Text>Não tem conta?</Text>
            <TouchableOpacity>
              <Text
                style={{ color: "#fff", fontWeight: "bold", marginLeft: 5 }}
                onPress={handleRegister}
              >
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>

          {error && <Text style={{ fontSize: 35, color: "red" }}>{error}</Text>}
          {success && (
            <Text style={{ fontSize: 35, color: "green" }}>
              Login realizado com sucesso!
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
