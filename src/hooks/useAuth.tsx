import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useEffect, useState } from "react";

type PropriedadeIniciadaOuObrigatoria = {
  checkAuthentication: (email: string, password: string) => void;
  handleLogin: (resultado: any) => void;
  handleLogout: (resultado: any) => void;
  isLoading: boolean;
  fetchUserData:() => void;
  userData: any;
};

const Propriedade = createContext<PropriedadeIniciadaOuObrigatoria>({
  checkAuthentication: () => {},
  isLoading: false,
  handleLogin: () => {},
  handleLogout: () => {},
  fetchUserData: () => {},
  userData: [],
});

export const ProvedorPropriedadeAplicacao = ({ children }: any) => {
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("rodrigo");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);

  const handleLogin = async (resultado: any) => {
    try {
      await AsyncStorage.setItem("@resultado", JSON.stringify(resultado));
      console.log("Usuário autenticado:", resultado);

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

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@resultado");
      setUserData(null);
      console.log("Usuário deslogado com sucesso.");      

    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  };

  const checkAuthentication = (email: string, password: string) => {
    setIsLoading(true);
    storeData(email, password);
    console.log("Pegou o email", email);
    setIsLoading(false);
  };

  const storeData = async (email: string, password: string) => {
    console.log("chamou a funcao");

    try {
      console.log("entrou no try");

      const jsonValue = JSON.stringify(email);
      await AsyncStorage.setItem("@infoUser", jsonValue);
      console.log("Dados salvos com sucesso");
    } catch (error) {
      console.log("Erro ao salvar dados!");
    }
  };

  //     const handleLogOut = () => {
  //     AsyncStorage.removeItem('@InfoUser');
  //     navigation.navigate('StackLogin', {name: "Home"});
  //   }

  const getData = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem("@infoUser");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        console.log("pegou os dados", jsonValue);
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
        handleLogin,
        handleLogout,
        fetchUserData,
        isLoading,
        userData,
        
      }}
    >
      {children}
    </Propriedade.Provider>
  );
};

export const useAuth = () => useContext(Propriedade);
