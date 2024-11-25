import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Ionicons} from '@expo/vector-icons';


export const EditProfile = () => {
  const [showName, setShowName] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [savedName, setSavedName] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  // const [userData, setUserData] = useState<any>(null);
  const { userData } = useAuth();
  const navigation = useNavigation();

  const atualizaNome = async () => {
    try {
      axios.put(
        `https://673e81080118dbfe860b784d.mockapi.io/cadastrar/${userData?.id}`,
        {
          nome: savedName,
        }
      );
    } catch (error) {
      console.log("nao foi possivel atualizar o nome");
    }
  };
  const atualizaSenha = async () => {
    try {
      axios.put(
        `https://673e81080118dbfe860b784d.mockapi.io/cadastrar/${userData?.id}`,
        {
          password: newPassword,
        }
      );
    } catch (error) {
      console.log("nao foi possivel atualizar o nome");
    }
  };

  const handleNavigation = () => {
    navigation.goBack();
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("UserConfig")}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [handleNavigation]);

  return (
    <KeyboardAvoidingView
      style={{ height: "100%" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPress={() => {
              setShowName(false);
              setShowPassword(false);
            }}
          >
            <Text style={styles.title}>{userData?.nome}</Text>
            <View style={styles.editItem}>
              <Image style={styles.userImg} source={{ uri: userData?.Foto }} />
              <View style={styles.name}>
                <TouchableOpacity
                  style={styles.buttonChange}
                  onPress={() => setShowName(!showName)}
                >
                  <Text style={styles.alter}>Alterar Nome</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.buttonChange}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.alter}>Alterar senha</Text>
                </TouchableOpacity>
              </View>
            </View>
            {showName && (
              <View style={styles.changeInformation}>
                <View style={styles.titleArea}>
                  <Text style={styles.nameofchange}>Alterar Nome</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite o novo Nome"
                    onChangeText={(text) => setName(text)}
                    value={name}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                      setSavedName(name);
                      setName("");
                      atualizaNome();
                    }}
                  >
                    <Text style={styles.saveButtonText}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {showPassword && (
              <View style={styles.changeInformation}>
                <View style={styles.titleAreaPassword}>
                  <Text style={styles.nameofchange}>Alterar Senha</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua Senha"
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua nova Senha"
                  secureTextEntry
                  onChangeText={(text) => setNewPassword(text)}
                  value={newPassword}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirme sua Senha"
                  secureTextEntry
                  onChangeText={(text) => setConfirmPassword(text)}
                  value={confirmPassword}
                />
                <View>
                  <TouchableOpacity style={styles.saveButtonPassword}>
                    <Text style={styles.saveButtonText} onPress={atualizaSenha}>
                      Salvar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View style={styles.logoutArea}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.logoutButton}
                onPress={handleNavigation}
              >
                <Text style={styles.alter}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
