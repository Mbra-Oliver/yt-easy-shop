import { Link, router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { COLORS } from "../../constantes/colors";
import ProductsList from "../../components/ProductsList";

const Index = () => {
  return (
    <View style={styles.root}>
      <View>
        <TextInput placeholder="Rechercher un produit" style={styles.input} />
      </View>
      <ProductsList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  input: {
    backgroundColor: COLORS.tagBackground,
    padding: 5,
    borderRadius: 5,
  },
});

export default Index;
