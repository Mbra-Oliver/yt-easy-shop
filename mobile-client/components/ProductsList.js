import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "./ProductItem";
DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ProductsList = () => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.title}>
              Les produits de nos derniers créateurs
            </Text>
          </View>
        )}
        data={DATA}
        keyExtractor={(item) => item}
        renderItem={(item) => <ProductItem />}
        numColumns={2}
        contentContainerStyle={{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default ProductsList;
