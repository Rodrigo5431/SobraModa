import axios from "axios";
import { useEffect, useState } from "react";
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
import React from "react";
import { useAuth } from "../../hooks/useAuth";

interface PropsPostagem {
  id: number;
  id_usuario: number;
  titulo: string;
  descricao: string;
  preco: number;
  foto: string;
  dataPostagem: Date;
}

export default function Configuration() {
  const [postagens, setPostagens] = useState<PropsPostagem[]>([]);
  const [id, setId] = useState<number>(0);
  const [error, setError] = useState<string>();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [FilteredPosts, setFilteredPosts] = useState<PropsPostagem[]>([]);
  const { fetchUserData, userData, postagem } = useAuth();

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData?.id) {
      handlePostagem();
    }
  }, [userData]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://673e81080118dbfe860b784d.mockapi.io/postagem/${id}`
      );

      if (response.status === 200) {
        console.log("excluido com sucesso");
      } else {
        console.log("falha ao excluir ");
      }
    } catch (error) {
      console.log("Erro ao conectar a api");
    }
  };

  const handlePostagem = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/postagem"
      );
      if (response.status === 200) {
        console.log("postagens: " + JSON.stringify(response.data));
        const allPosts = response.data;

        setFilteredPosts(
          allPosts.filter(
            (post: PropsPostagem) => post.id_usuario === userData?.id
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

  return (
    <View style={styles.container}>
      <HeaderConfiguration />
      {confirmDelete && (
        <View style={styles.confirm}>
          <Text style={styles.msgDelete}>Tem certeza que deseja Excluir?</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity
              onPress={() => {
                handleDelete(), setConfirmDelete(false);
              }}
            >
              <Text style={styles.buttom}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setConfirmDelete(false)}>
              <Text style={styles.buttom}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.user}>
        <Image
          source={{ uri: userData?.Foto }}
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
          data={sortedPosts}
          keyExtractor={(dados) => dados.id_usuario.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.posts}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  setConfirmDelete(true), setId(item.id);
                }}
              >
                <Text style={styles.textDelete}>. . .</Text>
              </TouchableOpacity>
              <Image
                style={styles.postImg}
                source={{ uri: item.foto }}
                alt="publicacao"
              />
              <Text style={styles.postTitle}>{item.titulo}</Text>
              <Text numberOfLines={1} style={styles.postDesc}>
                {item.descricao}
              </Text>
              <Text style={styles.postPrice}>Preço: R${item.preco}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
