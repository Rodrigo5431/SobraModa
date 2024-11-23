import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, createContext, useState, useEffect } from "react";

type PropriedadeIniciadaOuObrigatoria = {
  checkAuthentication: (email: string, password: string) => void;
  id: number | null;
  setId: (value: number) => void;
  foto: string;
  setFoto: (value: string) => void;
  email: string;
  tabChat:boolean;
  setTabChat: (value: boolean) => void;
  setEmail: (value: string) => void;
  nome: string;
  setNome: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isLoading: boolean;
  handleLogOut: () => void;
};

const Propriedade = createContext<PropriedadeIniciadaOuObrigatoria>({
  checkAuthentication: () => {},
  handleLogOut: () => {},
  id: null,
  setId: (value: number) => {},
  foto: "",
  setFoto: (value: string) => {},
  email: "",
  setEmail: () => {},
  nome: "Rodrigo",
  setNome: () => {},
  password: "",
  setPassword: () => {},
  isLoading: false,
  tabChat: false,
  setTabChat: () => {},
});

export const ProvedorPropriedadeAplicacao = ({ children }: any) => {
  const [id, setId] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("rodrigo");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tabChat, setTabChat] = useState<boolean>(false);

  const navigation = useNavigation();

  const checkAuthentication = (email: string, password: string) => {
    saveLogin(email, password)    
    navigation.navigate("Home")
  };

  const handleLogOut = () => {
    AsyncStorage.removeItem("@infoUserEmail");
    AsyncStorage.removeItem("@infoUserPassword");
    navigation.navigate("Login")
  }

  const saveLogin = async (email: string, password:string) => {
    try {
      const jsonEmail = JSON.stringify(email)
      const jsonPassword = JSON.stringify(password)
      await AsyncStorage.setItem("@infoUserEmail", jsonEmail);
      await AsyncStorage.setItem("@infoUserPassword", jsonPassword)
      console.log("dados salvos com sucesso!", jsonEmail, jsonPassword);
      
    } catch (error) {
      console.log("Erro ao salvar dados!");
    }
  };



  const getData = async () => {
    try {
      const valueEmail = await AsyncStorage.getItem("@infoUserEmail");
      const valuePassword = await AsyncStorage.getItem("@infoUserPassword");
      if (valueEmail !== null && valuePassword !== null) {
        const jsonEmail =JSON.parse(valueEmail)
        const jsonPassword =JSON.parse(valuePassword)
        navigation.navigate("Home")
        console.log("Pegou os dados", jsonEmail, jsonPassword);
        
      }
    } catch (error) {
      console.log("Erro ao buscar dados");
    }
    setIsLoading(false);
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <Propriedade.Provider
      value={{
        checkAuthentication,
        handleLogOut,
        id,
        setId,
        foto: "",
        setFoto: () => {},
        email,
        setEmail,
        nome: "",
        setNome: () => {},
        password,
        setPassword,
        isLoading,
        tabChat,
        setTabChat(value) {
            
        },
      }}
    >
      {children}
    </Propriedade.Provider>
  );
};

export const useAuth = () => useContext(Propriedade);
