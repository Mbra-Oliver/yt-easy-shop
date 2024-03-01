import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import TextInputIcon from "../../../components/TextInputIcon";
import AuthButton from "../../../components/AuthButton";
import { COLORS } from "../../../constantes/colors";

export default function index() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar animated={true} backgroundColor={COLORS.primary} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={{ paddingTop: 25 }}>
        <View
          style={{
            gap: 10,
            marginBottom: 8,
            alignItems: "center",
          }}
        >
          <Image
            source={require("./../../../assets/logo/logo.jpg")}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />
        </View>
        <View
          style={{
            gap: 10,
            marginBottom: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>YT EASY SHOP</Text>
          <Text style={{ color: COLORS.primary }}>
            Achète & vend en un click
          </Text>
        </View>

        <TextInputIcon />
        <TextInputIcon />

        <Pressable
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            paddingBottom: 10,
          }}
        >
          <Text>J'ai oublié mon mot de passe.</Text>
        </Pressable>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AuthButton />
        </View>

        <View
          style={{
            marginTop: 13,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text>Je suis nouveau.</Text>
          <Pressable>
            <Text style={{ color: COLORS.primary }}>
              Je veux créer un compte
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },
});
