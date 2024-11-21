import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const EditProfile = () => {
  const [name, setName] = useState<string>("rodrigo carvalho");
  const [password, setPassword] = useState<string>("********");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.editItem}>
        <Image
          style={styles.userImg}
          source={require("../../assets/configurationIcon.png")}
        ></Image>

        <View style={styles.name}>
          <TouchableOpacity style={styles.buttonChange}>
            <Text style={styles.alter}>Alterar Nome</Text>
          </TouchableOpacity>

          <TextInput style={styles.input}>
            <Text style={styles.userInformation}>{name}</Text>
          </TextInput>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonChange}>
            <Text style={styles.alter}>Alterar senha</Text>
          </TouchableOpacity>
            <TextInput style={styles.input}>
              <Text style={styles.userInformation}>{password}</Text>
            </TextInput>
        </View>
      </View>
    </View>
  );
};
