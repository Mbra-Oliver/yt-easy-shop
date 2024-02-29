import { Link, Redirect, useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const Index = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/login");
  };

  return (
    <View>
      <Link href="/profile/orders">My Orders</Link>
      <Link href="/profile/orders/1">Ma commande</Link>

      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
