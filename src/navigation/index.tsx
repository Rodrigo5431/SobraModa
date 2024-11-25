import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ProvedorPropriedadeAplicacao } from "../hooks/useAuth";
import Cadastro from "../screens/Cadastro";
import { EditProfile } from "../screens/EditProfile";
import { Login } from "../screens/Login";
import PrivateChat from "../screens/PrivateChat";
import { colors } from "../styles/colors";
import { MyDrawer } from "./drawerNavigator";

import { ProductAdd } from "@/screens/ProductAdd";
import Profile from "@/screens/Profile";
import Configuration from "@/screens/UserConfig";

const Stack = createNativeStackNavigator();

export function Navigator() {
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
            options={{
              title: "ConversaPrivada",
              headerShown: true,
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="ProductAdd"
            component={ProductAdd}
            options={{ title: "Editar Perfil", headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "", headerShown: true }}
          />
          <Stack.Screen
            name="UserConfig"
            component={Configuration}
            options={{ title: "Configurações de Usuário", headerShown: true }}
          />
        </Stack.Navigator>
      </ProvedorPropriedadeAplicacao>
    </NavigationContainer>
  );
}
