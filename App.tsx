
import React from "react";
import { useFonts,ComicNeue_400Regular,
  ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
  import AppLoading from "expo-app-loading";
// import { EditProfile } from "./src/screens/EditProfile";
// import { NoImplements } from "./src/screens/NoImplements";
import { Navigator } from "./src/navigation";
// import Home from "./src/screens/Home";

//const Stack = createStackNavigator();

import  Add  from "./src/screens/Add";

export default function App() {

const[FontsLoaded]= useFonts({ComicNeue_400Regular,
  ComicNeue_700Bold })

  if(!FontsLoaded)
    <AppLoading />


  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Chat"
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="Chat" component={Chat} />
    //     {/* <Stack.Screen name="PrivateChat" component={PrivateChat}/> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    // <EditProfile/>

    // <NoImplements/>

  // <Navigator/>

  <Add/>


  )
}



