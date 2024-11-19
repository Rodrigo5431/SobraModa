import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { RouteProp } from "@react-navigation/native";

// Definição do tipo para os parâmetros da rota
type PrivateChatRouteParams = {
  Usuario: string;
  Mensagem: string;
};

// Tipo para a propriedade de rota
type PrivateChatProps = {
  route: RouteProp<{ params: PrivateChatRouteParams }, "params">;
};

export const PrivateChat: React.FC<PrivateChatProps> = ({ route }) => {
  const { Usuario, Mensagem } = route.params;

  // Estado para gerenciar a lista de mensagens e o campo de entrada
  const [messages, setMessages] = useState([{ sender: Usuario, text: Mensagem }]);
  const [newMessage, setNewMessage] = useState("");

  // Função para enviar mensagem
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

      {/* Campo de entrada e botão de envio */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3D5F6",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  messagesList: {
    flex: 1,
    marginBottom: 10,
  },
  messageBox: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  theirMessage: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
  },
  myMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  user: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    color: "#555",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#6200ee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
