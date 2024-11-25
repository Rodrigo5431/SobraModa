import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./styles";

interface Produto {
  id: number;
  foto: string;
  titulo: string;
  preco: string;
  dataPostagem: Date;
}

export const Home = () => {
  const [allPosts, setAllPosts] = useState<Produto[]>([]);
  // const [produtosHorizontal, setProdutosHorizontal] = useState<Produto[]>([]);
  const [productId, setproductId] = useState<number>(0);
  const [expand, setExpand] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);
  const { userData, user, setUser, postagem, setPostagem } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://673e81080118dbfe860b784d.mockapi.io/postagem"
        );
        const data: Produto[] = response.data;

        setAllPosts(data);
        setFilteredProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = allPosts
      .concat(allPosts)
      .filter((produto) =>
        produto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredProdutos(filtered);
  };

  const navigateToChat = async (id: number) => {
    try {

      const response = await axios.get(
        `https://673e81080118dbfe860b784d.mockapi.io/postagem/${id}`
      );
      if (response.status === 200) {
// <<<<<<< HEAD
//         const vendedor = response.data; // Dados do vendedor (usuário que fez a postagem)

//         const mensagem = `Oi, que bom ter você aqui! O produto selecionado: ${produto.titulo} - R$ ${produto.preco} seria esse o seu interesse ?`;
        
//           navigation.navigate("PrivateChat", {
//           nome: vendedor.nome, 
//           mensagem: mensagem,
//         });
// =======
        const produto = response.data;
        setPostagem(response.data);
        try {
          const resultado = await axios.get(
            `https://673e81080118dbfe860b784d.mockapi.io/cadastrar/${produto.id_usuario}`
          );
          setUser(resultado.data);
          navigation.navigate("Profile");
        } catch (error) {
          console.log("erro ao achar usuario da postagem");
        }
      } else {
        console.log("vendedor não encontrado");
      }
    } catch (error) {
      console.log("erro ao conectar a api");
    }
  };

  const handleProductClick = (product: Produto) => {
    navigateToChat(product.id);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  const sortedPosts = filteredProdutos.sort(
    (a, b) =>
      new Date(b.dataPostagem).getTime() - new Date(a.dataPostagem).getTime()
  );

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.produtoContainer}>
      <TouchableOpacity
        onPress={() => handleProductClick(item)}
        style={styles.product}
      >
        <Image source={{ uri: item.foto }} style={styles.produtoImage} />
        <Text numberOfLines={1} style={styles.produtoTitle}>
          {item.titulo}
        </Text>
        <Text style={styles.price}>R$ {item.preco}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}> 
      <View style={styles.containerPlusMaxAdvencedPower}>
        <View style={styles.profileAndSearchContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: userData?.Foto }}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Pesquise aqui..."
              value={searchTerm}
              onChangeText={setSearchTerm}
              style={styles.searchInput}
            />
            <TouchableOpacity onPress={handleSearch}>
              <FontAwesome name="search" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <Text onPress={() => setExpand(!expand)} style={styles.buttonText2}>
          Recentes
        </Text>
        <FlatList
          data={sortedPosts}
          horizontal={expand}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.container3}>
        <FlatList
          data={allPosts}
          renderItem={renderItem}

          //keyExtractor={(item) => item.id}

          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};
