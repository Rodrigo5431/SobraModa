import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigator } from "./src/navigation";
import { 
  useFonts, 
  ComicNeue_400Regular, 
  ComicNeue_700Bold 
} from "@expo-google-fonts/comic-neue";
import { IslandMoments_400Regular } from "@expo-google-fonts/island-moments";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    ComicNeue_400Regular,
    ComicNeue_700Bold,
    IslandMoments_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
         <Navigator />

    </>
  );
}
