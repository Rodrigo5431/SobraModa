import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const EditProfile = () => {
  const [name, setName] = useState<string>("rodrigo carvalho");
  const [password, setPassword] = useState<string>("********");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <View style={styles.editItem}>
        {/* <Image source={require('../../assets/configurationIcon.png')}></Image> */}
        <View style={styles.name}>
          <TouchableOpacity style={styles.buttonChange}>
            <Text>Alterar Nome</Text>
            <Text>{name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonChange}>
            <Text>Alterar senha</Text>
            <Text>{password}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
