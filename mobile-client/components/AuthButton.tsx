import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constantes/colors";

const AuthButton = ({ onClick, children }) => {
  return (
    <TouchableOpacity
      style={{
        width: "80%",
        backgroundColor: COLORS.primary,
        alignItems: "center",
        padding: 10,
        borderRadius: 25,
      }}
    >
      <Text
        style={{ textAlign: "center", color: COLORS.white }}
        onPress={onClick}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
