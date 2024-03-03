import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import TextInputIcon from "../../../components/TextInputIcon";
import AuthButton from "../../../components/AuthButton";
import { COLORS } from "../../../constantes/colors";

const stepsContent = [
  "Comment devons-nous vous appeler ?",
  "Définissez votre contact",
  "Choisissez votre mot de passe",
];

const icons = ["hipchat", "phone", "key"];
const isSecurity = [false, false, true];

const Index = () => {
  const navigate = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const goLogin = () => {
    navigate.replace("/login");
  };

  const submitForm = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./../../../assets/logo/logo.jpg")}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepText}>{stepsContent[currentStep - 1]}</Text>
        </View>

        {currentStep <= icons.length && (
          <TextInputIcon
            icon={icons[currentStep - 1]}
            setSecureEntry={isSecurity[currentStep - 1]}
          />
        )}

        <View style={styles.buttonContainer}>
          <AuthButton onClick={submitForm}>Suivant</AuthButton>
        </View>

        <View style={styles.loginContainer}>
          <Text>J'ai déjà un compte.</Text>
          <Pressable onPress={goLogin}>
            <Text style={styles.loginText}>Me connecter</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },
  container: {
    paddingTop: 25,
  },
  logoContainer: {
    gap: 10,
    marginBottom: 8,
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  stepContainer: {
    gap: 10,
    marginBottom: 30,
  },
  stepText: {
    color: COLORS.primary,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    marginTop: 13,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  loginText: {
    color: COLORS.primary,
  },
});

export default Index;
