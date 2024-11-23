import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Chat } from '../screens/Chat';
import { Home } from '../screens/Home';
import UserConfig from "../screens/UserConfig";
import { colors } from '../styles/colors';




export function MainTabNavigatorChat() {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: "center",
                headerTintColor: colors.basic.preto,
                tabBarActiveTintColor: colors.basic.branco,
                tabBarStyle: {
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
                name="Chat"
                component={Chat}
                options={{

                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                }}
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
