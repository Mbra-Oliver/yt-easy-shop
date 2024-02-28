import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: `Produits de la categorie ${id}`,
        }}
      />

      <Text>Categorie {id} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
