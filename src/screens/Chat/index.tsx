import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { HeaderChat } from "../../components/HeaderChat";
import { SearchInput } from "../../components/SearchInput";
import axios from "axios";
import { styles } from "./style";
import { NavigationProp } from "@react-navigation/native";

type UsuarioData = {
  id: string;
  Usuario: string;
  Mensagem: string;
  Foto: string;
};

type ChatScreenNavigationProp = NavigationProp<
  { PrivateChat: { Usuario: string; Mensagem: string } },
  "PrivateChat"
>;

type ChatProps = {
  navigation: ChatScreenNavigationProp;
};

export const Chat = ({ navigation }:ChatProps) => {
  const [dados, setDados] = useState<UsuarioData[]>([]);
  const [dadosFiltrados, setDadosFiltrados] = useState<UsuarioData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const listaDados = async () => {
    try {
      const response = await axios.get<UsuarioData[]>(
        "https://673cc81b96b8dcd5f3fba5e2.mockapi.io/Usuarios"
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
        item.Usuario.toLowerCase().includes(texto.toLowerCase())
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
                    Usuario: item.Usuario,
                    Mensagem: item.Mensagem,
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
                    <Text style={styles.chatUser}>{item.Usuario}</Text>
                    <Text style={styles.chatMessage}>
                      {item.Mensagem.length > 50
                        ? `${item.Mensagem.substring(0, 50)}...`
                        : item.Mensagem}
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
