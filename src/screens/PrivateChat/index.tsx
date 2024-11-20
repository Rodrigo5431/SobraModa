import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import {styles} from "./styles";

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
