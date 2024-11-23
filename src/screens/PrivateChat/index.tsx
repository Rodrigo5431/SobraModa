import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

type PrivateChatRouteParams = {
  Usuario: string;
  Mensagem: string;
};

type PrivateChatProps = {
  route: RouteProp<{ params: PrivateChatRouteParams }, "params">;
};

export default function PrivateChat({ route }: PrivateChatProps) {

  const navigation = useNavigation();
  const { Usuario, Mensagem } = route.params;

  const [messages, setMessages] = useState([{ sender: Usuario, text: Mensagem }]);
  const [newMessage, setNewMessage] = useState<string>("");

  // Ajuste da configuração do cabeçalho aqui
  useEffect(() => {
    // A opção do título é configurada com o nome do usuário
    navigation.setOptions({
      headerTitle: Usuario, // Exibindo o nome do usuário no cabeçalho
      headerTitleAlign: 'center',  // Título centralizado
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('UserConfig')}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, Usuario]); // Atualiza o título toda vez que o nome do usuário mudar

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Você", text: newMessage },
      ]);
      setNewMessage(""); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Lista de mensagens */}
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBox,
              item.sender === "Você" ? styles.myMessage : styles.theirMessage,
            ]}
          >
            <Text style={styles.user}>{item.sender}</Text>
            <Text style={styles.message}>{item.text}</Text>
          </View>
        )}
        style={styles.messagesList}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem"
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
