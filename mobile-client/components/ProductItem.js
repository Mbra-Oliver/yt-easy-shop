import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { COLORS } from "./../constantes/colors";
import ProductButton from "./ProductButton";

export default function ProductItem({ item }) {
  const imageUrl = "https://random.imagecdn.app/500/150";

  return (
    <Pressable style={styles.root}>
      <View style={styles.productContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} blurRadius={1} />
      </View>

      <View style={styles.productDetails}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">
            {item.item.title}
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>100.000 FCFA</Text>
        </View>
      </View>

      <View style={styles.buy}>
        <ProductButton />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    height: 250,
    backgroundColor: COLORS.tagBackground,
    position: "relative",
  },

  productContainer: {
    overflow: "hidden",
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    height: 100,
    width: "100%",
    borderRadius: 5,
  },
  titleText: {
    color: COLORS.grayText,
  },

  priceContainer: {},
  price: {
    fontWeight: "700",
    fontSize: 16,
  },
  productDetails: {
    marginTop: 5,
    flexDirection: "column",
    gap: 5,
  },
  buy: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    width: "80%",
  },
});
