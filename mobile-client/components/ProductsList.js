import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import ProductItem from "./ProductItem";
import { COLORS } from "../constantes/colors";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    image: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    price: 57,
    title: "Mushroom - Shitake, Dry",
    description: "() { 0; }; touch /tmp/blns.shellshock1.fail;",
  },
  {
    id: 2,
    image: "http://dummyimage.com/124x100.png/cc0000/ffffff",
    price: 99,
    title: "Beer - Tetleys",
    description: "-1.00",
  },
  {
    id: 3,
    image: "http://dummyimage.com/111x100.png/5fa2dd/ffffff",
    price: 59,
    title: "Wine - Fontanafredda Barolo",
    description: "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }",
  },
  {
    id: 4,
    image: "http://dummyimage.com/111x100.png/5fa2dd/ffffff",
    price: 59,
    title: "Wine - Fontanafredda Barolo",
    description: "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }",
  },
];

CATEGORIES = [
  {
    id: 1,
    title: "Chaussure",
    active: true,
  },
  {
    id: 2,
    title: "Chaussure",
    active: false,
  },
  {
    id: 3,
    title: "Chaussure",
    active: false,
  },
  {
    id: 4,
    title: "Chaussure",
    active: false,
  },

  {
    id: 5,
    title: "Chaussure",
    active: false,
  },
  {
    id: 6,
    title: "Chaussure",
    active: false,
  },
];

const ProductsList = () => {
  return (
    <View>
      <FlatList
        data={DUMMY_PRODUCTS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <FlatList
              horizontal={true}
              style={{ paddingVertical: 5 }}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
              data={CATEGORIES}
              keyExtractor={(item) => item.id + new Date().getMilliseconds()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.productCategory,
                    item.active && styles.activeCat,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      item.active && styles.activeCatText,
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",

                marginTop: 15,
              }}
            >
              <Text>Articles populaires</Text>
            </View>
          </View>
        )}
        renderItem={(item) => {
          return <ProductItem item={item} />;
        }}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          paddingBottom: 70,
          backgroundColor: COLORS.productBackground,
          marginBottom: 40,
        }}
        columnWrapperStyle={{
          gap: 10,

          paddingVertical: 10,
        }}
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
  ItemInvisible: {
    backgroundColor: "transparent",
  },

  productCategory: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.tagBackground,
  },
  activeCat: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  activeCatText: {
    color: "#ffffff",
  },
  categoryText: {},
});

export default ProductsList;
