import React from "react";
import { MainTabNavigator } from "./MainTabNavigation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../styles/colors";
// import { Chat } from "../screens/Chat";

import { Home } from "../screens/Home";
import { Chat } from "../screens/Chat";
import { NoImplements } from "../screens/NoImplements";
import { MainTabNavigatorChat } from "./MainTabNavigatorChat";
import { Alert, Touchable, TouchableOpacity } from "react-native";
import { EditProfile } from "../screens/EditProfile";
import { PrivateChat } from "../screens/PrivateChat";




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
                    name="Cadastrar"
                    component={NoImplements}
                    options={{ title: "Cadastro", headerShown: false }}
                />

                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{ title: "Editar Perfil", headerShown: false }}
                />

                <Stack.Screen
                    name="PrivateChat"
                    component={PrivateChat}
                    options={{ title: "Conversa Privada", headerShown: false }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}