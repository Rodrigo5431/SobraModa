// import { useFonts,ComicNeue_400Regular,
//   ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
//   import AppLoading from "expo-app-loading";
// import { EditProfile } from "./src/screens/EditProfile";
// import { NoImplements } from "./src/screens/NoImplements";
import { Login } from './src/screens/Login';
import { AuthProvider } from './src/hooks/useAuth';
import { Register } from './src/screens/Register';
import { Cadastro } from './src/screens/Cadastro';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Chat } from "./src/screens/Chat";
import { PrivateChat } from "./src/screens/PrivateChat";
import  Add  from "./src/screens/Add";
//import { useFonts,ComicNeue_400Regular, ComicNeue_700Bold } from "@expo-google-fonts/comic-neue";
//import AppLoading from "expo-app-loading";
// import { EditProfile } from "./src/screens/EditProfile";
// import { NoImplements } from "./src/screens/NoImplements";
import { Navigator } from "./src/navigation";
import { StatusBar } from 'react-native';
//import Home from "./src/screens/Home";
//import { Configuration } from "./src/screens/UserConfig";

//const Stack = createStackNavigator();

// import  Add  from "./src/screens/Add";

export default function App() {

// const[FontsLoaded]= useFonts({ComicNeue_400Regular,
//   ComicNeue_700Bold })

//   if(!FontsLoaded)
//     <AppLoading />


  return (
    <>  
      <StatusBar Style="auto" />
      <Navigator/>
      </>
 
    
    // <EditProfile/>

    // <NoImplements/>

  // <Add/>
  )
}



