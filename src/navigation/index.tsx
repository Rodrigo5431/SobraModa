import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProvedorPropriedadeAplicacao } from "../hooks/useAuth";
import { Cadastro } from "../screens/Cadastro";
import { Chat } from "../screens/Chat";
import { EditProfile } from "../screens/EditProfile";
import { Login } from "../screens/Login";
import Configuration from "../screens/UserConfig";
import { colors } from "../styles/colors";
import { MainTabNavigator } from "./MainTabNavigation";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";
import  PrivateChat  from "../screens/PrivateChat";
import { Alert } from "react-native";
import { MainTabNavigatorChat } from "./MainTabNavigatorChat";
import { Home } from "../screens/Home";
import { useAuth } from "../hooks/useAuth";
import { MyDrawer } from "./drawerNavigator";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <ProvedorPropriedadeAplicacao>
        <Stack.Navigator
          initialRouteName="Login"
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
            name="Chat"
            component={Chat}
            options={({ navigation }) => ({
              headerShown: false,
              headerTitle: "Mensagens",
              headerTitleAlign: "center",
            })}
          />


    const{tabChat} = useAuth();


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home" //depois que terminar colocar a Login para ser a principal
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: colors.purple.cor5,
                    },
                }}>


                {/* <Stack.Screen
                    name="Home"
                    component={MainTabNavigator}
                    options={{ headerShown: false }}
                /> */}

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
                    options={{ title: "ConversaPrivada", headerShown: false }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}
        
        //developer daqui para baixo
        
        {/* <Stack.Screen
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
            name="UserConfig"
            component={Configuration}
            options={{ title: "Configuraçoes Usuario", headerShown: false }}
          />

           <Stack.Screen
            name="PrivateChat"
            component={PrivateChat}
            options={{ title: "Conversa Privada", headerShown: false }}
          /> 
        </Stack.Navigator>
      </ProvedorPropriedadeAplicacao>
    </NavigationContainer>
  );
};*/}
