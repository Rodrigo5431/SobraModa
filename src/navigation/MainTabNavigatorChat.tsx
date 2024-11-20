import React from 'react';
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../styles/colors';
import { Home } from '../screens/Home';
import UserConfig from "../screens/UserConfig";
import { Chat } from '../screens/Chat';
import { NoImplements } from '../screens/NoImplements';




export function MainTabNavigatorChat() {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Chat"
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
