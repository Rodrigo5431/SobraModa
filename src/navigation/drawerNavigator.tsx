import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MainTabNavigator } from './MainTabNavigation';
import { colors } from '@/styles/colors';
import { Chat } from '@/screens/Chat';
import Profile from '@/screens/Profile';
import UserConfig from "@/screens/UserConfig"

import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (

    <GestureHandlerRootView>
    <Drawer.Navigator 
      screenOptions={{headerStyle:{
        backgroundColor:colors.purple.cor2, height:80, },
      headerTintColor:colors.basic.branco, 
      drawerActiveTintColor: colors.basic.branco,
      drawerInactiveTintColor: colors.basic.preto,
      drawerActiveBackgroundColor:colors.purple.cor6, 
      drawerContentContainerStyle:{flex:1, backgroundColor:colors.purple.cor4, borderTopRightRadius:20},
      overlayColor:"transparent",
                drawerStyle:{
                    backgroundColor: "#transparent",
                    paddingTop: 32, 
                    width:"50%", 
                }, 
                drawerLabelStyle: {
                    marginLeft:-5, 
                }
              }}>
      <Drawer.Screen name="Home" component={MainTabNavigator} options={{headerTitle:""}}/>
      <Drawer.Screen name="Mensagens" component={Chat} options={{headerTitle:""}} />
      <Drawer.Screen name="Perfil" component={UserConfig} options={{headerTitle:""}} />
    </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}