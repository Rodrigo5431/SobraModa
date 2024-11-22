import React from "react";
import { Navigator } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { ProductAdd } from "./src/screens/ProductAdd";
import { ProductList } from "./src/screens/Test";
import { 
  useFonts, 
  ComicNeue_400Regular, 
  ComicNeue_700Bold 
} from "@expo-google-fonts/comic-neue";
import { IslandMoments_400Regular } from "@expo-google-fonts/island-moments";
import AppLoading from "expo-app-loading";
import { Home } from "./src/screens/Home";

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
      {/* <ProductList /> */}
      {/* <ProductAdd /> */}
      {/* <Navigator /> */}
      <Home />
    </>
  );
}
