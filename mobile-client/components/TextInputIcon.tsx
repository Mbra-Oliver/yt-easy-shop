import { View, Text, TextInput, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import { COLORS } from "../constantes/colors";

const TextInputIcon = ({ icon, setSecureEntry }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.root,
        {
          borderColor: isFocused ? COLORS.primary : COLORS.productBackground,
          borderWidth: isFocused ? 2 : 1,
          backgroundColor: isFocused ? COLORS.white : COLORS.productBackground,
        },
      ]}
    >
      <Fontisto name={icon} size={24} color={COLORS.grayText} />
      <TextInput
        secureTextEntry={setSecureEntry}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
    marginBottom: 10,
    borderRadius: 10,
  },

  input: {
    flex: 1,
  },
});

export default TextInputIcon;
