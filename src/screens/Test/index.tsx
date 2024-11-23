import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Image } from 'react-native'; // Importando o Image
import axios from 'axios';

interface Product {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  foto: string;
}

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);  // Estado para armazenar os produtos
  const [loading, setLoading] = useState<boolean>(true);  // Estado para controle de carregamento

  // Função para fazer a requisição GET para a API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://673cc81b96b8dcd5f3fba5e2.mockapi.io/postagm');
      setProducts(response.data);  // Armazena os produtos no estado
      setLoading(false);  // Finaliza o carregamento
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Erro ao carregar os produtos. Tente novamente.');
      console.error(error);
    }
  };

  // Carrega os produtos ao montar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produtos Anunciados</Text>
      
      {loading ? (
        <Text>Carregando...</Text>  // Mensagem enquanto os dados estão sendo carregados
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Text style={styles.productTitle}>{item.titulo}</Text>
              <Text style={styles.productDesc}>{item.descricao}</Text>
              <Text style={styles.productPrice}>Preço: R${item.preco}</Text>
              <Image source={{ uri: item.foto }} style={styles.productImage} />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDesc: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00b894',
  },
  productImage: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
