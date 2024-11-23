
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";
import style from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://673cc81b96b8dcd5f3fba5e2.mockapi.io/postagm"
        );
        const data: Produto[] = response.data;

        setProdutosVertical(data.slice(0, Math.ceil(data.length / 2)));
        setProdutosHorizontal(data.slice(Math.ceil(data.length / 2)));
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleProductClick = (product: Produto) => {
    Alert.alert("Produto Selecionado", `Você selecionou: ${product.titulo}`);
  };

  const renderItem = ({ item }: { item: Produto }) => (
    <TouchableOpacity
      onPress={() => handleProductClick(item)}
      style={style.produtoContainer}
    >
      <Image source={{ uri: item.foto }} style={style.produtoImage} />
      <Text style={style.produtoTitle}>{item.titulo}</Text>
      <Text>R$ {item.preco}</Text>
    </TouchableOpacity>
  );


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
            source={require("../../../assets/perfil.jpg")}
            style={style.profileImage}
          />
        </View>

        <TouchableOpacity style={style.button}>
          <FontAwesome name="search" size={20} color="black" />
          <Text style={style.buttonText}>Pesquise aqui</Text>
        </TouchableOpacity>
      </View>

      <View style={style.container2}>
        <Text onPress={() => setExpand(!expand)} style={style.buttonText2}>
          Recentes
        </Text>
        <FlatList
          data={produtosHorizontal}
          horizontal={expand}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={style.container3}>
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
