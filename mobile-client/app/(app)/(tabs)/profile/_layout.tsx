import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="orders/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackLayout;
