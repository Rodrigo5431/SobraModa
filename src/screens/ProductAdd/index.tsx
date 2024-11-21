import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { HeaderChat } from "../../components/HeaderChat";
import { ProductInput } from "../../components/ProductInput";
import { styles } from "./style";

const { height } = Dimensions.get("window");

export const ProductAdd = () => {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 58, backgroundColor: "#E3D5F6" }}
        >
          <View style={styles.container}>
            <HeaderChat texto="Anunciar" />
            <TouchableOpacity style={styles.caixa}>
              <Ionicons name="camera-outline" size={36} color="rgba(0,0,0,0.6)" />
              <Text style={styles.msg}>Adicionar Foto</Text>
            </TouchableOpacity>

            <View style={styles.info}>
              <ProductInput placeHolder="Titulo do anúncio" />
              <ProductInput placeHolder="Descrição do anúncio" height={140} />
              <ProductInput placeHolder="Preço (R$)" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.btnText}>Postar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
