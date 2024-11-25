import { useNavigation } from "@react-navigation/native";
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
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

interface PropsPostagem {
  id: number;
  id_usuario: number;
  titulo: string;
  descricao: string;
  preco: number;
  foto: string;
  dataPostagem: Date;
}

export default function Profile() {
  const [postagens, setPostagens] = useState<PropsPostagem[]>([]);
  const [error, setError] = useState<string>();
  const [FilteredPosts, setFilteredPosts] = useState<PropsPostagem[]>([]);
  const { fetchUserData, user } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    fetchUserData();
    const id = user.id
    console.log("id do usuario", id);

  }, []);

  useEffect(() => {
    if (user?.id) {
      handlePostagem();
    }
  }, [user]);


  const handlePostagem = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/postagem/"
      );
      if (response.status === 200) {
        const allPosts = response.data;

        setFilteredPosts(
          allPosts.filter(
            (post: PropsPostagem) => post.id_usuario === user?.id
          )
        );

        if (FilteredPosts.length > 0) {
          setPostagens(FilteredPosts);

        } else {
          setError("Nao há postagens disponiveis.");
        }
      }
    } catch (error) {
      console.error("Erro ao conectar a API:", error);
      setError("Erro ao conectar. Verifique sua conexão.");
    }
  };
  console.log("posts filtrados : " + FilteredPosts);

  const sortedPosts = FilteredPosts.sort(
    (a, b) =>
      new Date(b.dataPostagem).getTime() - new Date(a.dataPostagem).getTime()
  );

  const handleMensagem = () => {
    // const mensagem = `Oi, que bom ter você aqui! O produto 
    //      selecionado: ${user.titulo} - R$ ${user.preco} seria esse o seu interesse ?`;

     navigation.navigate("PrivateChat" //, {
    //   nome: user.nome,
    //   mensagem: mensagem,
    // }
    )
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{user.nome}</Text>
      </View>
      <View style={styles.user}>
        <Image
          source={{ uri: user?.Foto }}
          style={styles.userImage}
        ></Image>

        <Text>{user?.descricao}</Text>
      </View>
      <View style={styles.talk}>
        <TouchableOpacity
          onPress={handleMensagem}
          style={styles.talkButton} activeOpacity={0.7}>
          <Image source={whatsappIcon} style={styles.talkImg}></Image>
          <Text style={styles.talkText}>Fale Comigo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsArea}>
        {error && <View></View>}
        <FlatList
          data={sortedPosts}
          keyExtractor={(dados) => dados.id_usuario.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.posts}>
              <Image
                style={styles.postImg}
                source={{ uri: item.foto }}
                alt="publicacao"
              />
              <Text style={styles.postTitle}>{item.titulo}</Text>
              {/* <Text style={styles.postDesc}>{item.descricao}</Text> */}
              <Text style={styles.postPrice}>Preço: R${item.preco}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
