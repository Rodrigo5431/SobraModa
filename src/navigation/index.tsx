import React from "react";
import { MainTabNavigator } from "./MainTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {colors} from "../styles/colors";
// import { Chat } from "../screens/Chat";

import Home from "../screens/Home";




const Stack = createNativeStackNavigator();

export const Navigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home" //depois que terminar colocar a Login para ser a principal
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.purple.cor5,
                    },
                }}
            >
                {/* <Stack.Screen
                    name="Chat"
                    component={MainTabNavigator}
                    options={{
                        title: "Bem-vindo",
                      /*   headerShadowVisible: false, 
                        headerShown: false,
                        /* fullScreenGestureShadowEnabled: false, 

                    }}

                /> */}

                 <Stack.Screen
                    name="Home"
                    component={MainTabNavigator}
                    options={{ headerShown: false }}
                /> 

                {/* <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={({navigation}) => ({
                        headerTitle:"Mensagem",
                        headerTitleAlign: "center",
                    })}

                />

                <Stack.Screen
                    name="Contacts"
                    component={ContatoScreen}
                    options={{ headerTitle: "Contatos",
                        headerTitleAlign: "center",
                    }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login", headerShown: false }}
                />  */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}