import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MainTabNavigator } from './MainTabNavigation';
import { colors } from '@/styles/colors';

import { Chat } from '@/screens/Chat';


const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (

    <Drawer.Navigator 
      screenOptions={{headerStyle:{backgroundColor:colors.purple.cor2, height:80 },
      headerTintColor:colors.basic.branco, }}>
      <Drawer.Screen name="Home" component={MainTabNavigator} options={{headerTitle:""}}/>
      <Drawer.Screen name="Mensagens" component={Chat} options={{headerTitle:""}} />
    </Drawer.Navigator>
  );
}