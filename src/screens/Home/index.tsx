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
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Linking } from 'react-native';


interface Produto {
  id: number;
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
          "https://673e81080118dbfe860b784d.mockapi.io/postagem"
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
    const filtered = produtosVertical.concat(produtosVertical).filter(
      (produto) =>
        produto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProdutos(filtered);
  };

  const navigateToChat = async (produto: Produto) => {
    try {
      // Suponha que cada produto tenha um 'userId' associado que identifique o vendedor
      const response = await axios.get(
        `https://673e81080118dbfe860b784d.mockapi.io/cadastrar/${produto.id}` // Suponha que 'userId' seja o ID do vendedor
      );

      if (response.status === 200) {
        const vendedor = response.data; // Dados do vendedor (usuário que fez a postagem)
        
        // Redirecionar para a tela de chat, passando o nome do vendedor e uma mensagem inicial
       // navigation.navigate("PrivateChat", { Usuario: id.nome, Mensagem: "Oi, estou interessado no produto!" });
      } else {
        throw new Error("Erro ao buscar o vendedor: status diferente de 200");
      }
    } catch (error) {
      console.error("Erro ao buscar o vendedor:", error);
      Alert.alert("Erro", "Não foi possível encontrar o vendedor.");
    }
  };

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.produtoContainer}>
      <TouchableOpacity onPress={() => handleProductClick(item)}>
        <Image source={{ uri: item.foto }} style={styles.produtoImage} />
        <Text style={styles.produtoTitle}>{item.titulo}</Text>
        <Text style={styles.price}>R$ {item.preco}</Text> {/* Coloquei o preço abaixo da descrição */}
      </TouchableOpacity>
      <Text
        style={styles.chatText}
    //    onPress={() => navigateToChat(item.id)} 
    onPress={() => Linking.openURL('https://wa.me/5521982386705?text=Oi%20estou%20interessado%20no%20produto%20' + item.titulo)} // Corrigido para usar Linking.openURL
      >
        Fale com o anunciante   
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
    <View style={styles.container}>     
     <View style={styles.containerPlusMaxAdvencedPower}>
          {/* Contêiner com perfil e pesquisa lado a lado */}
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
          data={expand ? filteredProdutos : produtosHorizontal}
          horizontal={expand}
          renderItem={renderItem}
        //  keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.container3}>

        <FlatList
          data={produtosVertical}
          renderItem={renderItem}
        //  keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
      
    </View>
  );
};
