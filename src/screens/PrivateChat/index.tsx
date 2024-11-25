import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useAuth } from '@/hooks/useAuth';



export default function PrivateChat () {
  
  const navigation = useNavigation();
  const [ nome, setNome ] = useState<string>("");  
  const { user, postagem } = useAuth();  
  const [ message, setMessage ] = useState<string>(`Oi, que bom ter você aqui! O produto selecionado: ${postagem.titulo} - R$ ${postagem} seria esse o seu interesse ?`);

 const [messages, setMessages] = useState([{ sender: nome, text: message }]);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(()=>{
    setNome(user.nome);
  },[])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: nome,
      headerTitleAlign: 'center',
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
  }, [navigation, nome]); // Atualiza o título toda vez que o nome do usuário mudar

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Você", text: newMessage },
      ]);
      setNewMessage(""); // Limpa o campo de mensagem após envio
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
