import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProvedorPropriedadeAplicacao } from "../hooks/useAuth";
import { Chat } from "../screens/Chat";
import { EditProfile } from "../screens/EditProfile";
import Configuration from "../screens/UserConfig";
import { colors } from "../styles/colors";
import { MainTabNavigator } from "./MainTabNavigation";
import { Login } from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import PrivateChat from "../screens/PrivateChat";
import { Alert } from "react-native";
import { MainTabNavigatorChat } from "./MainTabNavigatorChat";
import { Home } from "../screens/Home";
import { useAuth } from "../hooks/useAuth";
import { MyDrawer } from "./drawerNavigator";

import { ProductAdd } from "@/screens/ProductAdd";

const Stack = createNativeStackNavigator();

export function Navigator() {


    return (
        <NavigationContainer>
            <ProvedorPropriedadeAplicacao>
                <Stack.Navigator
                    initialRouteName="Login" //depois que terminar colocar a Login para ser a principal, teste Home
                    screenOptions={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: colors.purple.cor5,
                        },
                    }}>


                    <Stack.Screen
                        name="Home"
                        component={MyDrawer}
                        options={{ title: "Mensagens Privadas", headerShown: false }}
                    />

                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ title: "Login", headerShown: false }}
                    />
                    <Stack.Screen
                        name="Cadastrar"
                        component={Cadastro}
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
                        options={{ title: "ConversaPrivada", headerShown: true, headerTitleAlign: "center" }}
                    />

                    <Stack.Screen
                        name="ProductAdd"
                        component={ProductAdd}
                        options={{ title: "Editar Perfil", headerShown: false }}
                    />


                </Stack.Navigator>
            </ProvedorPropriedadeAplicacao>
        </NavigationContainer>
    );
}