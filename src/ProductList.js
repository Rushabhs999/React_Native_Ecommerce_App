import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { CartContext } from "./CartContext";

function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const isItemInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const renderItem = ({ item }) => {
    const inCart = isItemInCart(item.id);

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemId}>{item.id}</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <TouchableOpacity
          style={[styles.itemButton, inCart ? styles.removeButton : null]}
          onPress={() => (inCart ? removeFromCart(item.id) : addToCart(item))}
        >
          <Text>{inCart ? "Remove from Cart" : "Add to Cart"}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        columnWrapperStyle={styles.row}
      />
      {/* </View>
        </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // marginHorizontal: "auto",
    // maxWidth: 500,
    padding: 10,
    scrollbars: true,
  },
  itemContainer: {
    borderWidth: 1,
    padding: 10,
    width: 100,
    justifyContent: "space-between",
  },
  row: {
    padding: 10,
    justifyContent: "space-between",
  },
  itemId: {
    fontSize: 14,
  },
  itemTitle: {
    fontSize: 14,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: "bold",
  },
  itemImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  itemButton: {
    width: 100,
    backgroundColor: "blue",
    padding: 5,
  },
});
export default ProductList;
