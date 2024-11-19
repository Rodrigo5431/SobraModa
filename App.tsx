import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import ChatScreen from "./src/screens/ChatScreen";

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <ChatScreen />
      
    </View>
  );
}


