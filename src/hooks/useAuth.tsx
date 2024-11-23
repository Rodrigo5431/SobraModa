import AsyncStorage from "@react-native-async-storage/async-storage";
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
};

const Propriedade = createContext<PropriedadeIniciadaOuObrigatoria>({
  checkAuthentication: () => {},
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

  const checkAuthentication = (email: string, password: string) => {
    setIsLoading(true);

   
    const userId = 1;
    setId(userId);
    storeData(userId);

    setIsLoading(false);
  };

  const storeData = async (id: number) => {
    try {
      await AsyncStorage.setItem("@userId", JSON.stringify(id));
    } catch (error) {
      console.log("Erro ao salvar dados!");
    }
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem("@userId");
      if (value !== null) {
        setId(JSON.parse(value));
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
        id,
        setId,
        foto: "",
        setFoto: () => {},
        email,
        setEmail,
        nome: "",
        setNome: () => {},
        password: "",
        setPassword,
        isLoading,
      }}
    >
      {children}
    </Propriedade.Provider>
  );
};

export const useAuth = () => useContext(Propriedade);
