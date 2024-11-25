import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import UserConfig from "../screens/UserConfig";
import { colors } from '../styles/colors';

import { ProductAdd } from '@/screens/ProductAdd';
import { useAuth } from '../hooks/useAuth';


export function MainTabNavigator() {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
    const {setTabChat} = useAuth();
 
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: "center",
                headerTintColor: colors.basic.preto,
                tabBarActiveTintColor: colors.basic.branco,
                tabBarStyle: {
                    justifyContent: "space-evenly",
                    height: Platform.OS === "android" ? 60 : 80,
                    paddingBottom: Platform.OS === "android" ? 10 : 25,
                    backgroundColor: colors.purple.cor2,
                },
                headerStyle: {
                    backgroundColor: colors.purple.cor4,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                }}
            />

            {/* <Tab.Screen
                name="Chat"
                component={Chat}
                options={({ navigation }) => {
                    return {
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles-outline" size={size} color={color} />
                      ),
                      onPress: () => navigation.navigate("Chat"),
                    };
                  }}
            /> */}

                
            <Tab.Screen
                name="Add"
                component={ProductAdd}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    ),
                })}
            />

            <Tab.Screen
                name="Perfil"
                component={UserConfig}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
 
    );
};
