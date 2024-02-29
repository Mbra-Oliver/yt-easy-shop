import { Stack } from "expo-router";
import React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1 }}
      keyboardVerticalOffset="-100"
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
