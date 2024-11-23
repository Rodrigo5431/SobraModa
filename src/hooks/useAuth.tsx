import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, createContext, useState, useEffect } from "react";

type PropsContext = {
  email: string;
  tabChat:boolean;
  setTabChat: (value: boolean) => void;
  setEmail: (value: string) => void;
  checkAuthentication: (email: string, password: string) => void;
  isLoading: boolean;
};

const AuthContext = createContext<PropsContext>({
  email: "",
  setEmail: () => {},
  checkAuthentication: () => {},
  isLoading: false,
  tabChat: false,
  setTabChat: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tabChat, setTabChat] = useState<boolean>(false);

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
      console.log("Erro ao buscr dados");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ email, setEmail, checkAuthentication, isLoading, tabChat, setTabChat }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
