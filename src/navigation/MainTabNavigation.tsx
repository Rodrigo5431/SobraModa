import React from 'react';
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Platform } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NoImplements } from '../../src/screens/NoImplements';

import { colors } from '../styles/colors';




export function MainTabNavigator() {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: colors.basic.preto,
                tabBarActiveTintColor: colors.basic.branco, 
               /*  tabBarInactiveTintColor: colors.basic.branco,  */
                tabBarStyle: {
                    height: Platform.OS === "android" ? 60 : 80,
                    paddingBottom: Platform.OS === "android" ? 10 : 25,
                    backgroundColor: colors.purple.cor2,
                },
                headerStyle: {
                    backgroundColor: colors.purple.cor4,
                },
            }}>


            <Tab.Screen
                name="Home"
                component={NoImplements}
                options={({ navigation }) => ({
                    // headerTitle: "Status",
                    // tabBarLabel: "Status",
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name='home'
                            size={size}
                            color={color}
                        />
                    )
                })} />


            <Tab.Screen
                name="Call"
                component={NoImplements}
                options={({ navigation }) => ({
                    headerTitle: "Ligar",
                    tabBarLabel: "Ligar",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='call-outline'
                            size={size}
                            color={color}
                        />
                    )
                })} />



            <Tab.Screen
                name="Camera"
                component={NoImplements}
                options={({ navigation }) => ({
                    headerTitle: "Camera",
                    tabBarLabel: "Camera",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='camera-outline'
                            size={size}
                            color={color}
                        />
                    )
                })} />

{/* 
            <Tab.Screen
                name="Mensagens"
                component={ChatsScreen}
                options={({ navigation }) => ({
                    headerTitle: "Mensagens",
                    tabBarLabel: "Mensagens",
                    headerRight: () => (
                        <Entypo
                            name="new-message"
                            style={{ marginRight: 15 }}
                            size={Platform.OS === "android" ? 24 : 25}
                            colors="royalblue"
                            onPress={() => navigation.navigate("Contacts")}
                        />
                    ),


                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='chatbubbles-sharp'
                            size={size}
                            color={color}
                        />

                    ),

                })} />

            <Tab.Screen
                name="Settings"
                component={NoImplements}
                options={({ navigation }) => ({
                    headerTitle: "Ajustes",
                    tabBarLabel: "Ajustes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='settings-outline'
                            size={size}
                            color={color}
                        />
                    )
                })} /> */}

            {/* <Tab.Screen
                name="Welcome"
                component={Welcome}
                options={({ navigation }) => ({
                    headerTitle: "Bem-Vindo",
                    tabBarLabel: "Bem-Vindo",

                })} /> */}
        </Tab.Navigator>

    );
};
