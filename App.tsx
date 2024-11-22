import React from "react";
import { Navigator } from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { ProductAdd } from "./src/screens/ProductAdd";
import { ProductList } from "./src/screens/Test";

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <ProductList />
      {/* <ProductAdd /> */}
    </>
  );
}

