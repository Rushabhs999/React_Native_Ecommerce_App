import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CartContext } from "./CartContext";
function Dashboard() {
  const { cart } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <Text style={styles.count}>{cart.length}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  count: {
    fontSize: 18,
    color: "blue",
  },
});
export default Dashboard;
