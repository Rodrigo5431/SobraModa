import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { HeaderConfiguration } from "../../components/HeaderConfiguration";
import configurationIcon from "../../assets/configurationIcon.png";
import whatsappIcon from "../../assets/whatsapp.png";
import { useState } from "react";
import apis from "../../services/apis";
import { DataAPI } from "../../Mock/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import React from "react";

export default function Configuration() {
  const [user, setUser] = useState<any>();
  const [id, setId] = useState<number>();
  const [nome, setNome] = useState<string>();
  const [descricao, setDescricao] = useState<string>();
  const [foto, setFoto] = useState<any>();

  const decodeToken = (token: string): any => {
    try {
      const base64Payload = token.split(".")[1]; // Pega a segunda parte do token
      const decodedPayload = Buffer.from(base64Payload, "base64").toString(
        "utf-8"
      );
      return JSON.parse(decodedPayload); 
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  };

  async function searchUser() {
    try {
      const token = await AsyncStorage.getItem("userToken");

      if (!token) {
        console.error("Token não encontrado!");
        return;
      }

      const decodedToken = decodeToken(token);

      if (!decodedToken || !decodedToken.id) {
        console.error("ID do usuário não encontrado no token!");
        return;
      }

      const userId = decodedToken.id;
      setId(userId);

      const response = await apis.get(`/usuarios/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
      setNome(response.data.nome);
      setDescricao(response.data.descricao);
      setFoto(response.data.foto);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  }

  useEffect(() => {
    searchUser();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <HeaderConfiguration />
      <View style={styles.user}>
        <Image source={configurationIcon} style={styles.userImage}></Image>
        {/* <Image source={foto} style={styles.userImage}></Image> */}

        <Text>Costureira em ascensão</Text>
        {/* <Text>{descricao}</Text> */}
      </View>
      <View style={styles.talk}>
        <TouchableOpacity style={styles.talkButton} activeOpacity={0.7}>
          <Image source={whatsappIcon} style={styles.talkImg} />
          <Text style={styles.talkText}>Fale Comigo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsArea}>
        <FlatList
          data={DataAPI}
          keyExtractor={(dados) => dados.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.posts}>
              <Image
                style={styles.postImg}
                source={item.image}
                alt="publicacao"
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};
