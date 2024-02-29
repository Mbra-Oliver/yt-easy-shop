import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function index() {
  return (
    <SafeAreaView style={styles.root}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Text>index</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "red",
  },
});
