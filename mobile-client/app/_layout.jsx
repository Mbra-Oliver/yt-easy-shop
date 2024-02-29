import { Redirect, Slot, Stack, useRouter } from "expo-router";
import React, { useState } from "react";

import { Provider, useSelector } from "react-redux";
import reduxStore from "../store";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Provider store={reduxStore}>
      <Slot />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
