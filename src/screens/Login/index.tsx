import { useNavigation } from "@react-navigation/native";
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
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";


interface PropsInf {
  id: number;
  Foto: string;
  nome: string;
  email: string;
  password: string;
}

export const Login = () => {
  const navigation = useNavigation();

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [users, setUsers] = useState<PropsInf[]>([]);


  const { setEmail, email, setPassword, password, handleLogin } =
    useAuth();


  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleVerifyLogin = () => {
    const resultado = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );
  
    if (resultado) {
      handleLogin(resultado);
      setSuccess(true);
      setError("");

      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
      setSuccess(true);
      setError("");
      navigation.navigate("Home");
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
            valueInput={password}
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
            <Text style={{fontSize: 16, fontFamily: "ComicNeue_700Bold"}}>Não tem conta?</Text>
            <TouchableOpacity>
              <Text
                style={{ color: "#fff", marginLeft: 5, fontSize: 20, fontFamily: "ComicNeue_700Bold" }}
                onPress={handleRegister}
              >
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>

          {error && <Text style={{ fontSize: 18, color: "red" }}>{error}</Text>}
          {success && (
            <Text style={{ fontSize: 18, color: "green", fontFamily: "ComicNeue_700Bold" }}>
              Login realizado com sucesso!
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
