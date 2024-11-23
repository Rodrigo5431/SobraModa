import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import whatsappIcon from "../../assets/whatsapp.png";
import { HeaderConfiguration } from "../../components/HeaderConfiguration";
import { styles } from "./style";

interface PropsPostagem {
  id_usuario: number;
  titulo: string;
  descricao: string;
  preco: number;
  foto: string;
}

export default function Configuration() {
  const [user, setUser] = useState<any>();
  const [postagens, setPostagens] = useState<PropsPostagem[]>([]);
  const [id, setId] = useState<number>();
  const [nome, setNome] = useState<string>();
  const [descricao, setDescricao] = useState<string>();
  const [foto, setFoto] = useState<any>();
  const [error, setError] = useState<string>();
  const [FilteredPosts, setFilteredPosts] = useState<PropsPostagem[]>([]);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem("resultado");
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch (error) {
        console.error("Erro ao buscar dados do AsyncStorage:", error);
      }
    };

    fetchUserData();
    handlePostagem();
  }, []);

  const handlePostagem = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/postagem"
      );
      console.log(response);
      

      if (response.status === 200) {
        setPostagens(response.data);
      }
      
      const postagensT = response.data;

      const resultado: any = postagensT.filter(posts => posts.id_usuario === userData.id);

      if (resultado) {
        setFilteredPosts(resultado);
      } else {
        setError("não ha postagens");
      }

    } catch (error) {
      console.log("erro ao conectar api");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderConfiguration />
      <View style={styles.user}>
        <Image
          source={{ uri: userData?.image_url }}
          style={styles.userImage}
        ></Image>

        <Text>{userData?.descricao}</Text>
      </View>
      <View style={styles.talk}>
        <TouchableOpacity style={styles.talkButton} activeOpacity={0.7}>
          <Image source={whatsappIcon} style={styles.talkImg}></Image>
          <Text style={styles.talkText}>Fale Comigo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsArea}>
        {error! && <View></View>}
        <FlatList
          data={FilteredPosts}
          keyExtractor={(dados) => dados.id_usuario.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.posts}>
              <Image
                style={styles.postImg}
                source={{ uri: item.foto }}
                alt="publicacao"
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
