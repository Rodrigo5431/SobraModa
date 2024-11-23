import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HeaderConfiguration = () => {
  const [configuration, setConfiguration] = useState(false);
  const navigation = useNavigation();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem("resultado");
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch (error) {
        Alert.alert("Voce nao esta logado");
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const handleLogout = () => {
    AsyncStorage.removeItem("resultado");
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.userName}>{userData?.nome}</Text>
        <TouchableOpacity onPress={() => setConfiguration(!configuration)}>
          <Ionicons name="settings" size={35} style={styles.configIcon} />
        </TouchableOpacity>
      </View>

      {configuration && (
        <View style={styles.configMenu}>
          <Text style={styles.userEmail}>{userData?.email}</Text>
          <TouchableOpacity
            onPress={handleEditProfile}
            style={styles.editProfileButton}
          >
            <Text style={styles.editProfile}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
