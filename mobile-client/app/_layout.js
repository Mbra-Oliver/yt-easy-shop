import { Stack } from "expo-router";
import React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1 }}
      keyboardVerticalOffset="-50" // Ajustez la valeur selon vos besoins
    >
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="/categories/[id]" /> */}
      </Stack>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
