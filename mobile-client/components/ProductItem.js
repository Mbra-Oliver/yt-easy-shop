import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function ProductItem() {
  const imageUrl = "https://random.imagecdn.app/500/150";

  return (
    <View style={styles.root}>
      <View>
        <Text>ProductItem</Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.bottom}>
        <Text>A Good Product</Text>
        <Text>Add to cart</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 15,
    backgroundColor: "gray",
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },

  bottom: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
