import { Link, router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Index = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Link href="/products">Products</Link>
      {/* <Pressable onPress={() => router.push("/products/1")}>
        <Text> Go Product 1</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "products/[id]",
            params: { id: 44 },
          })
        }
      >
        <Text> Go Product 2</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
