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
import { useRouter } from "expo-router";
import DUMMY_PRODUCTS from "../assets/MOCK_DATA.json";

const CATEGORIES = [
  {
    id: 1,
    title: "Chaussure",
    active: true,
  },
  {
    id: 2,
    title: "Smartphone",
    active: false,
  },
  {
    id: 3,
    title: "Appareils",
    active: false,
  },
  {
    id: 4,
    title: "Gaming",
    active: false,
  },

  {
    id: 5,
    title: "Vêtements",
    active: false,
  },
  {
    id: 6,
    title: "Electroménager",
    active: false,
  },
];

const ProductsList = ({ displayCategorieTopBar }) => {
  const navigate = useRouter();
  displayCategorieTopBar =
    displayCategorieTopBar !== undefined ? displayCategorieTopBar : true;

  const renderListHeader = () => {
    if (!displayCategorieTopBar) {
      return null; // Ne rend rien si displayCategorieTopBar est false
    }

    return (
      <View>
        <FlatList
          horizontal={true}
          style={{ paddingVertical: 5 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          data={CATEGORIES}
          keyExtractor={(item: any) => item.id + new Date().getMilliseconds()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.productCategory, item.active && styles.activeCat]}
              onPress={() => navigate.push(`/categories/${item.id}`)}
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
    );
  };

  return (
    <View>
      <FlatList
        data={DUMMY_PRODUCTS}
        keyExtractor={(item: any) => item.id}
        ListHeaderComponent={renderListHeader}
        renderItem={({ item }) => {
          return <ProductItem item={item} />;
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
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
