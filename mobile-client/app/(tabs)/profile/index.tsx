import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View>
      <Link href="/profile/orders">My Orders</Link>
      <Link href="/profile/orders/1">Ma commande</Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
