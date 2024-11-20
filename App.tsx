import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <Home />
      {/* <Text>Inicio da SOBRA MODA</Text> */}
      
    </View>
  );
}


