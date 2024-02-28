import { Stack } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="/categories/[id]" /> */}
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
