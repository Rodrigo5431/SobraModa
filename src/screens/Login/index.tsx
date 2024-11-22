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
import { styles } from "./style";

interface PropsInf {
  id: number;
  nome: string;
  email: string;
  password: string;
}

export const Login = () => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [users, setUsers] = useState<PropsInf[]>([]);
  const [user, setUser] = useState<PropsInf>();
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState<string>();

  const navigation = useNavigation();

  const handleCadastro = () => {
    navigation.navigate("Cadastrar");
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  async function handleLogin() {
    const resultado = users.find(
      (user) => user.email === email && user.password === password
    );

    if (resultado) {
      setUser(resultado);
      console.log("achei," + resultado.email);
    } else {
      console.log("USUARIO NAO ENCONTRADO");
    }
  }

  async function searchUser() {
    // console.log("aquiiiiii");

    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/cadastrar"
      );

      // console.log('aqui 2 vezes');

      if (response.status === 200) {
        setUsers(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log("erro ");
    }
  }
  useEffect(() => {
    searchUser();
  }, []);

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
            typeInput={true}
            typeIcon="password"
          />

          <ButtonMain
            title="Entrar"
            handleFunction={handleLogin}
            propsBackgroundColor="#342142"
          />

          <View style={styles.linha} />

          <ButtonSocial
            title="Entrar com o Facebook"
            icon="logo-facebook"
            propsType="ionicon"
          />

          <ButtonSocial
            title="Entrar com o google"
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
            <TouchableOpacity onPress={handleCadastro}>
              <Text
                style={{ color: "#fff", fontWeight: "bold", marginLeft: 5 }}
              >
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
          {error && <Text style={{ fontSize: 35 }}>{error}</Text>}
          {success && (
            <Text style={{ fontSize: 35 }}>Login realizado com sucesso!</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
