import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "./src/screens/Chat";
import { PrivateChat } from "./src/screens/PrivateChat";
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Chat"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PrivateChat" component={PrivateChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

