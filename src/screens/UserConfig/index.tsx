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
import { useAuth } from "../../hooks/useAuth";

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
  const { fetchUserData, userData } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUserData(); // Recupera os dados do usuário
        await handlePostagem(); // Carrega as postagens
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const handlePostagem = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/postagem"
      );

      if (response.status === 200) {
        const allPosts = response.data;

        const userPosts = allPosts.filter(
          (post: PropsPostagem) => post.id_usuario === userData?.id
        );

        if (userPosts.length > 0) {
          setPostagens(userPosts);
        } else {
          setError("Nao há postagens disponiveis.");
        }
      }
    } catch (error) {
      console.error("Erro ao conectar a API:", error);
      setError("Erro ao conectar. Verifique sua conexão.");
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
        {error && <View></View>}
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
