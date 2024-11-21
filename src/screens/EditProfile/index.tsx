import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./style";
import axios from "axios";
import { KeyboardAvoidingView } from "react-native";

export const EditProfile = () => {
  const [showName, setShowName] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [savedName, setSavedName] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const id = useState<string>("");
  //const token = localStorage.getItem("token");
  const handlesubmitPassword = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/usuarios/${id}`,

        { password, newPassword, confirmPassword },

        {
          headers: {
            //   Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {}
  };

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
            <Text style={styles.title}>{savedName}</Text>
            <View style={styles.editItem}>
              <Image
                style={styles.userImg}
                source={require("../../assets/configurationIcon.png")}
              />
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
                    <Text style={styles.saveButtonText}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View style={styles.logoutArea}>
              <TouchableOpacity activeOpacity={0.6} style={styles.logoutButton}>
                <Text style={styles.alter}>Sair</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
