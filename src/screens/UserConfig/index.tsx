import React, { useState } from "react";
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
import { HeaderConfiguration } from "../../components/HeaderConfiguration";
import { DataAPI } from "../../Mock/data";
import { styles } from "./style";

export default function Configuration() {
  const [user, setUser] = useState<any>();
  const [id, setId] = useState<number>();
  const [nome, setNome] = useState<string>();
  const [descricao, setDescricao] = useState<string>();
  const [foto, setFoto] = useState<any>();


  return (
    <ScrollView style={styles.container}>
      <HeaderConfiguration />
      <View style={styles.user}>
        <Image source={configurationIcon} style={styles.userImage}></Image>
        {/* <Image source={foto} style={styles.userImage}></Image> */}

        <Text>Costureira em ascensão</Text>
        {/* <Text>{descricao}</Text> */}
      </View>
      <View style={styles.talk}>
        <TouchableOpacity style={styles.talkButton} activeOpacity={0.7}>
          <Image source={whatsappIcon} style={styles.talkImg} />
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
};
