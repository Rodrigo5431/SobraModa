import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  TextInput,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";
import style from "./style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

interface Produto {
  id: string;
  foto: string;
  titulo: string;
  preco: string;
}

export const Home = () => {
  const [produtosVertical, setProdutosVertical] = useState<Produto[]>([]);
  const [produtosHorizontal, setProdutosHorizontal] = useState<Produto[]>([]);
  const [expand, setExpand] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const { fetchUserData, userData } = useAuth();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProdutos, setFilteredProdutos] = useState<Produto[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://673cc81b96b8dcd5f3fba5e2.mockapi.io/postagm"
        );
        const data: Produto[] = response.data;

        setProdutosVertical(data.slice(0, Math.ceil(data.length / 2)));
        setProdutosHorizontal(data.slice(Math.ceil(data.length / 2)));
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
    const filtered = produtosVertical.concat(produtosHorizontal).filter(
      (produto) =>
        produto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProdutos(filtered);
  };

  const navigateToChat = (productId: string) => {
    navigation.navigate("PrivateChat", { productId });
  };

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={style.produtoContainer}>
      <TouchableOpacity onPress={() => handleProductClick(item)}>
        <Image source={{ uri: item.foto }} style={style.produtoImage} />
        <Text style={style.produtoTitle}>{item.titulo}</Text>
        <Text>R$ {item.preco}</Text>
      </TouchableOpacity>
      <Text
        style={style.chatText}
        onPress={() => navigateToChat(item.id)} 
      >
        Fale comigo
      </Text>
    </View>
  );

  const handleProductClick = (product: Produto) => {
    Alert.alert("Produto Selecionado", `Você selecionou: ${product.titulo}`);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.containerPlusMaxAdvencedPower}>
        <View style={style.profileContainer}>
          <Image
            source={{ uri: userData?.Foto }}
            style={style.profileImage}
          />
        </View>

        <View style={style.searchContainer}>
          <TextInput
            placeholder="Pesquise aqui..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={style.searchInput}
          />
          <TouchableOpacity onPress={handleSearch}>
            <FontAwesome name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.container2}>
        <Text onPress={() => setExpand(!expand)} style={style.buttonText2}>
          Recentes
        </Text>
        <FlatList
          data={expand ? filteredProdutos : produtosHorizontal}
          horizontal={expand}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={style.container3}>
        <Text onPress={() => setExpand(!expand)} style={style.buttonText2}>
          Mais Vendidos
        </Text>

        <FlatList
          data={produtosVertical}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </ScrollView>
  );
};
