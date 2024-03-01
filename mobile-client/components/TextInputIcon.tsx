import { View, Text, TextInput } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../constantes/colors";

const TextInputIcon = () => {
  return (
    <View
      style={{
        // borderWidth: 1,
        // borderColor: COLORS.primary,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: COLORS.productBackground,
      }}
    >
      <Fontisto name="email" size={24} color={COLORS.grayText} />
      <TextInput />
    </View>
  );
};

export default TextInputIcon;
