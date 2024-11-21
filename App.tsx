import React from "react";
import { Navigator } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { ProductAdd } from "./src/screens/ProductAdd";

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <ProductAdd />
    </>
  );
}

