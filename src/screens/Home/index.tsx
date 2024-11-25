import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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

const ProdutoItem = React.memo(({ item, onPress }: { item: Produto; onPress: () => void }) => (
  <View style={styles.produtoContainer}>
    <TouchableOpacity onPress={onPress} style={styles.product}>
      <Image source={{ uri: item.foto }} style={styles.produtoImage} />
      <Text numberOfLines={1} style={styles.produtoTitle}>
        {item.titulo}
      </Text>
      <Text style={styles.price}>R$ {item.preco}</Text>
    </TouchableOpacity>
  </View>
));

export const Home = () => {
  const [allPosts, setAllPosts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { userData, setUser, setPostagem } = useAuth();
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://673e81080118dbfe860b784d.mockapi.io/postagem"
      );
      const data: Produto[] = response.data;
      setAllPosts(data);
    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProdutos = useMemo(() => {
    return allPosts.filter((produto) =>
      produto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allPosts, searchTerm]);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  const navigateToChat = async (id: number) => {
    try {
      const response = await axios.get(
        `https://673e81080118dbfe860b784d.mockapi.io/postagem/${id}`
      );
      if (response.status === 200) {
        const produto = response.data;
        setPostagem(produto);
        try {
          const resultado = await axios.get(
            `https://673e81080118dbfe860b784d.mockapi.io/cadastrar/${produto.id_usuario}`
          );
          setUser(resultado.data);
          navigation.navigate("Profile");
        } catch (error) {
          console.error("Erro ao buscar usuário da postagem:", error);
        }
      } else {
        console.error("Vendedor não encontrado");
      }
    } catch (error) {
      console.error("Erro ao conectar à API:", error);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const renderHeader = () => (
    <View style={styles.containerPlusMaxAdvencedPower}>
      <View style={styles.profileAndSearchContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: userData?.Foto }} style={styles.profileImage} />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Pesquise aqui..."
            value={searchTerm}
            onChangeText={handleSearch}
            style={styles.searchInput}
            returnKeyType="search"
          />
          <TouchableOpacity onPress={() => Keyboard.dismiss()}>
            <FontAwesome name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <FlatList
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          fetchData();
          setTimeout(() => {
            setRefreshing(false);
          }, 1000);
        }}
        data={filteredProdutos}
        renderItem={({ item }) => (
          <ProdutoItem item={item} onPress={() => navigateToChat(item.id)} />
        )}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.mainContainer}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardAvoidingView>
  );
};
