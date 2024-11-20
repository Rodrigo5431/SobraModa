import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../services/api";

export const HeaderConfiguration = () => {
  const [configuration, setConfiguration] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [nome, setNome] = useState<string>('');
  

  async function searchUser() {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const response = await Api.get(`/usuarios/me`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setUser(response.data);
      setNome(response.data.nome);

    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  }

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
          <TouchableOpacity style ={styles.editProfileButton}>
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
