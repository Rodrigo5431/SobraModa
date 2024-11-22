import React from "react";
import { Navigator } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { Login } from "./src/screens/Login";
import Configuration from "./src/screens/UserConfig";
import { Home } from "./src/screens/Home";
import { EditProfile } from "./src/screens/EditProfile";

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <Configuration/>
      {/* <Navigator /> */}
    </>
  );
}

