import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../../../constantes/colors";
import ProductsList from "../../../../components/ProductsList";

const Index = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ padding: 10, paddingBottom: 80 }}>
      <Stack.Screen
        options={{
          headerTitle: `Categorie: ${id}`,
        }}
      />

      <View style={{ paddingBottom: 10 }}>
        <TextInput
          placeholder="rechercher une catégorie..."
          style={{
            padding: 10,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: COLORS.productBackground,
            borderRadius: 10,
          }}
        />
      </View>

      <ProductsList displayCategorieTopBar={false} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
