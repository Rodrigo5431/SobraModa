import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, createContext, useState, useEffect } from "react";

type PropriedadeIniciadaOuObrigatoria = {
  checkAuthentication: (email: string, password: string) => void;
  id: number;
  setId: (value: number) => void;
  foto: string;
  setFoto: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  nome: string;
  setNome: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isLoading: boolean;
};

const Propriedade = createContext<PropriedadeIniciadaOuObrigatoria>({
  checkAuthentication: () => {},
  id: 0,
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
});

export const ProvedorPropriedadeAplicacao = ({ children }: any) => {
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("rodrigo");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    <Propriedade.Provider
      value={{
        checkAuthentication,
        id: 0,
        setId: () => {},
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
