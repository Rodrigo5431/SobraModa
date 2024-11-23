import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigator } from "./src/navigation";


export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <Navigator />
    </>
  );
}

