import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { ButtonMain } from "../../components/ButtonMain";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";

export const Cadastro = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUsers = async () => {
    if (
      !nome.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !imageUri
    ) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha todos os campos."
      );
      return;
    }

    if (password === confirmPassword) {
      try {
        const newUsers = {
          nome,
          email,
          password,
          Foto: imageUri,
        };

        const response = await axios.post(
          "https://673e81080118dbfe860b784d.mockapi.io/cadastrar",
          newUsers
        );

        if (response.status === 201) {
          Alert.alert("Sucesso", "Cadastro realizado!");
          setNome("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setImageUri(null);
        }
      } catch (error) {
        Alert.alert("Erro", "Erro ao cadastrar usuario");
      }
    } else {
      Alert.alert("As senhas não são iguais!");
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão negada",
        "Você precisa dar permissão para acessar a galeria."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]?.uri) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.tituloPrincipal}>Cadastro</Text>

        <TouchableOpacity
          style={[styles.caixa, imageUri ? styles.imageBoxWithImage : {}]}
          onPress={pickImage}
        >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.imageInsideBox} />
          ) : (
            <Icon
              name="camera-outline"
              type="ionicon"
              size={36}
              color="#342142"
            />
          )}
          <Text style={styles.msg}>Adicionar Foto</Text>
        </TouchableOpacity>

        <View style={styles.inputBox}>
          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Nome:</Text>
            <TextInputField
              placeHolder="Digite seu nome"
              handleFunctionInput={setNome}
            />
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Email:</Text>
            <TextInputField
              placeHolder="Digite seu email"
              handleFunctionInput={setEmail}
            />
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Senha:</Text>
            <TextInputField
              placeHolder="Digite sua senha"
              handleFunctionInput={setPassword}
            />
          </View>

          <View style={styles.input}>
            <Text style={{ left: 5, color: "#342142" }}>Confirma a senha:</Text>
            <TextInputField
              placeHolder="Confirme a senha"
              handleFunctionInput={setConfirmPassword}
            />
          </View>
        </View>

        <View style={styles.button}>
          <ButtonMain
            title="FINALIZAR"
            propsBackgroundColor="#342142"
            handleFunction={createUsers}
          />
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={postUsers}>
          <Text style={styles.ButtonText}>FINALIZAR</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  );
};
