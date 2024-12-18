import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, createContext, useState, useEffect } from "react";

type PropriedadeIniciadaOuObrigatoria = {
  checkAuthentication: (email: string, password: string) => void;
  handleLogin: (resultado: any) => void;
  isLoading: boolean;
  handleLogOut: () => void;
  fetchUserData: () => void;
  userData: any;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  user: any;
  setUser: (value: PropsUser[]) => void;
  postagem: any;
  setPostagem: (value: PropsPostagem[]) => void;
};

const Propriedade = createContext<PropriedadeIniciadaOuObrigatoria>({
  checkAuthentication: () => {},

  handleLogOut: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  isLoading: false,
  handleLogin: () => {},
  fetchUserData: () => {},
  userData: [],
  user: [],
  setUser: (value: PropsUser[]) => {},
  postagem:[],
  setPostagem: (value: PropsPostagem[]) => {},

});

interface PropsUser {
  id: number;
  Foto: string;
  nome: string;
  email: string;
  password: string;
  mensagem: string;
}

interface PropsPostagem {
  id: number;
  id_usuario: number;
  titulo: string;
  descricao: string;
  preco: number;
  foto: string;
  dataPostagem: Date;
}

export const ProvedorPropriedadeAplicacao = ({ children }: any) => {
  const [id, setId] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);
  const [tabChat, setTabChat] = useState<boolean>(false);
  const [user, setUser] = useState<PropsUser[]>([]);
  const [postagem, setPostagem] = useState<PropsPostagem[]>([]);

  const navigation = useNavigation();

  const handleLogin = async (resultado: PropsUser) => {
    try {
      await AsyncStorage.setItem("@resultado", JSON.stringify(resultado));
      checkAuthentication(email, password);
    } catch (error) {
      console.error("Erro ao salvar os dados do usuário:", error);
    }
  };

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const data = await AsyncStorage.getItem("@resultado");
      if (data) {
        const parsedData = JSON.parse(data);
        setUserData(parsedData); // Atualiza o estado global com os dados recuperados
        console.log("Dados recuperados:", parsedData);
      }
    } catch (error) {
      console.error("Erro ao recuperar informações do usuário:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuthentication = (email: string, password: string) => {
    saveLogin(email, password);
    navigation.navigate("Home");
  };

  const handleLogOut = () => {
    AsyncStorage.removeItem("@infoUserEmail");
    AsyncStorage.removeItem("@infoUserPassword");
    navigation.navigate("Login");
  };

  const saveLogin = async (email: string, password: string) => {
    try {
      const jsonEmail = JSON.stringify(email);
      const jsonPassword = JSON.stringify(password);
      await AsyncStorage.setItem("@infoUserEmail", jsonEmail);
      await AsyncStorage.setItem("@infoUserPassword", jsonPassword);
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
        const jsonEmail = JSON.parse(valueEmail);
        const jsonPassword = JSON.parse(valuePassword);
        navigation.navigate("Home");
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
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        handleLogin,
        userData,
        fetchUserData,
        user,
        setUser,
        postagem,
        setPostagem
      }}
    >
      {children}
    </Propriedade.Provider>
  );
};

export const useAuth = () => useContext(Propriedade);
