import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { HeaderChat } from "../../components/HeaderChat";
import { SearchInput } from "../../components/SearchInput";
import axios from "axios";
import { styles } from "./style";
import { NavigationProp, useRoute } from "@react-navigation/native";

interface PropsInfUser {
  id: number;
  Foto: string;
  nome: string;
  email: string;
  password: string;
  mensagem: string;
}

type ChatScreenNavigationProp = NavigationProp<
  { PrivateChat: { nome: string; mensagem: string } },
  "PrivateChat"
>;

type ChatProps = {
  navigation: ChatScreenNavigationProp;
};

export const Chat = ({ navigation }: ChatProps) => {
  const [dados, setDados] = useState<PropsInfUser[]>([]);
  const [dadosFiltrados, setDadosFiltrados] = useState<PropsInfUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const route = useRoute();

  useEffect(() => {
    if (route.name === "Chat") {
    }
  });

  const listaDados = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/cadastrar"
      );
      setDados(response.data);
      setDadosFiltrados(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const filtrarUsuarios = (texto: string) => {
    if (texto === "") {
      setDadosFiltrados(dados);
    } else {
      const filtrados = dados.filter((item) =>
        item.nome.toLowerCase().includes(texto.toLowerCase())
      );
      setDadosFiltrados(filtrados);
    }
  };

  useEffect(() => {
    listaDados();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderChat texto="Mensagens" />
      <View style={styles.card}>
        <SearchInput placeHolder="Pesquisar" onSearch={filtrarUsuarios} />
        {loading ? (
          <Text style={styles.loadingText}>Carregando...</Text>
        ) : (
          <FlatList
            data={dadosFiltrados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.chatContainer}
                onPress={() =>
                  navigation.navigate("PrivateChat", {
                    nome: item.nome,
                    mensagem: item.mensagem,
                  })
                }
              >
                <View style={styles.chatBubble}>
                  <Image
                    source={{
                      uri: item.Foto,
                    }}
                    style={styles.userImage}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.chatUser}>{item.nome}</Text>
                    <Text style={styles.chatMessage}>
                      {item.mensagem.length > 50
                        ? `${item.mensagem.substring(0, 50)}...`
                        : item.mensagem}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};
