import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderChat } from "../../components/HeaderChat";
import { ProductInput } from "../../components/ProductInput";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/deb585wpe/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "agoraVai";

const { height } = Dimensions.get("window");

export const ProductAdd = () => {

  const { userData, fetchUserData } = useAuth();

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão negada",
        "Você precisa dar permissão para acessar a galeria."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]?.uri) {
      setImageUri(result.assets[0].uri);
    }
  };

  const postProduct = async () => {
    if (!titulo.trim() || !descricao.trim() || !preco.trim() || !imageUri) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha todos os campos."
      );
      return;
    }

    if (!userData.id) {
      Alert.alert("Erro", "ID do usuário não encontrado.");
      return;
    }

    try {
      const formData = new FormData();

      const file = {
        uri: imageUri,
        type: "image/jpeg",
        name: "produto.jpg",
      };

      formData.append("file", file as any);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const cloudinaryResponse = await axios.post(CLOUDINARY_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = cloudinaryResponse.data.secure_url;

      const newProduct = {
        titulo,
        descricao,
        dataPostagem: Date.now(),
        preco: parseFloat(preco),
        foto: imageUrl,
        id_usuario: userData.id, 
      };

      const response = await axios.post(
        "https://673e81080118dbfe860b784d.mockapi.io/postagem",
        newProduct
      );

      if (response.status === 201) {
        Alert.alert("Sucesso", "Produto publicado com sucesso!");
        setTitulo("");
        setDescricao("");
        setPreco("");
        setImageUri(null);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Erro na resposta:", error.response?.data);
        Alert.alert(
          "Erro",
          `Erro no envio do produto: ${error.response?.data}`
        );
      } else {
        console.error("Erro desconhecido:", error);
        Alert.alert("Erro", "Erro desconhecido ao publicar o produto.");
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 58,
            backgroundColor: "#E3D5F6",
          }}
        >
          <View style={styles.container}>
            <HeaderChat texto="Anunciar" />

            <TouchableOpacity
              style={[
                styles.caixa,
                imageUri ? styles.imageBoxWithImage : {},
              ]}
              onPress={pickImage}
            >
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  style={styles.imageInsideBox}
                />
              ) : (
                <Ionicons
                  name="camera-outline"
                  size={36}
                  color="rgba(0,0,0,0.6)"
                />
              )}
              <Text style={styles.msg}>Adicionar Foto</Text>
            </TouchableOpacity>

            <View style={styles.info}>
              <ProductInput
                placeHolder="Título do anúncio"
                value={titulo}
                onChangeText={setTitulo}
              />
              <ProductInput
                placeHolder="Descrição do anúncio"
                height={140}
                value={descricao}
                onChangeText={setDescricao}
              />
              <ProductInput
                placeHolder="Preço (R$)"
                value={preco}
                onChangeText={setPreco}
                keyboardType="numeric"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnAdd} onPress={postProduct}>
          <Text style={styles.btnText}>Postar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
