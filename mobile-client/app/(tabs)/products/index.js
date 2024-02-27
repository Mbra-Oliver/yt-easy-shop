import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductList from "../../../components/ProductsList";
const Index = () => {
  return (
    <View style={styles.root}>
      <Text>Mes produits</Text>
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 5,
  },
});

export default Index;
