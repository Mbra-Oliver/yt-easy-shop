import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../constantes/colors";
import ProductButton from "./ProductButton";
import { useRouter } from "expo-router";

export default function ProductItem({ item }) {
  const navigate = useRouter();
  return (
    <Pressable
      style={styles.root}
      onPress={() => navigate.push(`/products/${item.id}`)}
    >
      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={require("./../assets/products/mediamodifier-7cERndkOyDw-unsplash.jpg")}
          blurRadius={1}
        />
      </View>

      <View style={styles.productDetails}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price} FCFA</Text>
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
    height: 280,
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
    width: "100%",
    height: 140,
    aspectRatio: 1,
    alignSelf: "center",
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
