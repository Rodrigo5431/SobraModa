import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MainTabNavigator } from './MainTabNavigation';

import { Chat } from '@/screens/Chat';


const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainTabNavigator} options={{headerTitle:""}}/>
      <Drawer.Screen name="Mensagens" component={Chat} />
    </Drawer.Navigator>
  );
}