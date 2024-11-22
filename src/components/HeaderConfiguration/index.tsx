import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const HeaderConfiguration = () => {
  const [configuration, setConfiguration] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [nome, setNome] = useState<string>('');

  
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>

        <Text style={styles.userName}>Rodrigo5431</Text>
        {/* <Text style={styles.userName}>{nome}</Text> */}

        <TouchableOpacity onPress={() => setConfiguration(!configuration)}>
          <Ionicons name="settings" size={35} style={styles.configIcon} />
        </TouchableOpacity>
      </View>

      {configuration && (
        <View style={styles.configMenu}>
          <Text style={styles.userEmail}>rodrigo@email.com</Text>
          <TouchableOpacity onPress={handleEditProfile} style ={styles.editProfileButton}>
            <Text style={styles.editProfile}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      )}
   </View>
);
};