import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-web";
import { CartProvider } from "./CartContext";
import Dashboard from "./Dashboard";
import ProductList from "./ProductList";
function App() {
  return (
    <CartProvider>
      <SafeAreaView style={styles.mainContainer}>
        <Dashboard />
        <ProductList />
      </SafeAreaView>
    </CartProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
