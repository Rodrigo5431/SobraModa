import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Add from "../screens/Add";
import { Chat } from "../screens/Chat";
import { EditProfile } from "../screens/EditProfile";
import { NoImplements } from "../screens/NoImplements";
import UserConfig from "../screens/UserConfig";
import { colors } from "../styles/colors";
import { MainTabNavigator } from "./MainTabNavigation";
import React from "react";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  // const navigation = useNavigation();

  // const handleChats = () => {

  //   Alert.alert('Vamos para a Chats');
  //   navigation.navigate('Chat');
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" //depois que terminar colocar a Login para ser a principal
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.purple.cor5,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen

          name="AdicaoProduto"
          component={Add}
          options={{ title: "Adicionar novo Produto", headerShown: false }}
        />

        <Stack.Screen
          name="Cadastrar"
          component={NoImplements}
          options={{ title: "Cadastro", headerShown: false }}
        />

        {/* <TouchableOpacity onPress={handleChats}> */}
        <Stack.Screen
          name="Chat"
          // onPress={() => handleChats()}
          component={Chat}
          options={({ navigation }) => ({
            headerShown: false,
            headerTitle: "Mensagens",
            headerTitleAlign: "center",
          })}
        />
        {/* </TouchableOpacity> */}

        <Stack.Screen
          name="Login"
          component={NoImplements}
          options={{ title: "Login", headerShown: false }}
        />

        <Stack.Screen
          name="PrivateChat"
          component={NoImplements}
          options={{ title: "Conversa Privada", headerShown: false }}
        />

        <Stack.Screen
          name="EditarProfile"
          component={EditProfile}
          options={{ title: "Conversa Privada", headerShown: false }}
        />

        <Stack.Screen
          name="NoImplements"
          component={NoImplements}
          options={{ title: "Conversa Privada", headerShown: false }}
        />

        <Stack.Screen
          name="UserConfig"
          component={UserConfig}
          options={{ title: "Configurações de Perfil", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
