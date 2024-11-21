import { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import logo from "../../../assets/iconeSM.png";
import { ButtonMain } from "../../components/ButtonMain";
import { ButtonSocial } from "../../components/ButtonSocial";
import { TextInputField } from "../../components/TextInput";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

export const Login = () => {

  const {email, setEmail, checkAuthentication, isLoading} =useAuth();
  const [password, setPassword] = useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
   checkAuthentication(email, password);
    
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
            <TouchableOpacity>
              <Text
                style={{ color: "#fff", fontWeight: "bold", marginLeft: 5 }}>
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
