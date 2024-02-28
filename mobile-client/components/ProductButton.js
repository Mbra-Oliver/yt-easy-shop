import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constantes/colors";

const ProductButton = () => {
  return (
    <TouchableOpacity style={styles.root}>
      <Text style={styles.text}>ACHETEZ</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: COLORS.tagBackground,
  },
});

export default ProductButton;
