import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import configurationIcon from "../../assets/configurationIcon.png";
import whatsappIcon from "../../assets/whatsapp.png";
import { DataAPI } from "../../Mock/data";
import { styles } from "./style";
import { HeaderConfiguration } from "../../components/HeaderConfiguration";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Configuration() {
  const [user, setUser] = useState<any>();
  const [id, setId] = useState<number>();
  const [nome, setNome] = useState<string>();
  const [descricao, setDescricao] = useState<string>();
  const [foto, setFoto] = useState<any>();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem("resultado");
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch (error) {
        console.error("Erro ao buscar dados do AsyncStorage:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <HeaderConfiguration />
      <View style={styles.user}>

        <Image source={{uri : userData?.Foto}} style={styles.userImage}></Image>

        <Text>{userData?.descricao}</Text>
      </View>
      <View style={styles.talk}>
        <TouchableOpacity style={styles.talkButton} activeOpacity={0.7}>
          <Image source={whatsappIcon} style={styles.talkImg} ></Image>
          <Text style={styles.talkText}>Fale Comigo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsArea}>
        <FlatList
          data={DataAPI}
          keyExtractor={(dados) => dados.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.posts}>
              <Image
                style={styles.postImg}
                source={item.image}
                alt="publicacao"
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
