import React, { useState } from "react";
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
import { MaterialIcons } from '@expo/vector-icons';

type PrivateChatRouteParams = {
  Usuario: string;
  Mensagem: string;
};

type PrivateChatProps = {
  route: RouteProp<{ params: PrivateChatRouteParams }, "params">;
};

export default function PrivateChat({ route }: PrivateChatProps) {

  const { Usuario, Mensagem } = route.params;

  const [messages, setMessages] = useState([{ sender: Usuario, text: Mensagem }]);
  const [newMessage, setNewMessage] = useState<string>("");

  const rotas = useRoute();
  const navigation = useNavigation();


  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Você", text: newMessage },
      ]);
      setNewMessage(""); // Limpa o campo de entrada
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversa Privada</Text>

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

<KeyboardAvoidingView>
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
    </View>
  );
};

