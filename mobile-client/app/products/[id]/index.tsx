import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { COLORS } from "../../../constantes/colors";
import { AntDesign } from "@expo/vector-icons";
import { Stack } from "expo-router";
const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "Robe femme voyage",
        }}
      />

      <ImageBackground
        style={[styles.topContainer, styles.backgroundImage]}
        source={require("./../../../assets/products/milada-vigerova-p8Drpg_duLw-unsplash.jpg")}
      ></ImageBackground>
      <ScrollView style={styles.bottomContainer}>
        <View style={[styles.row, styles.itemsAround]}>
          <Text>Produit Exemple</Text>
          <Text style={styles.tag}>En Vente</Text>
        </View>

        <View style={[styles.row, styles.minorGap, styles.minorTopPadding]}>
          <Pressable style={[styles.smallTag, styles.flex, styles.itemsCenter]}>
            <AntDesign name="star" size={15} color={COLORS.success} />
            <Text>4.8</Text>
          </Pressable>
          <Pressable style={[styles.smallTag, styles.flex, styles.itemsCenter]}>
            <AntDesign name="like1" size={15} color={COLORS.success} />
            <Text>4.8</Text>
          </Pressable>

          <Pressable style={[styles.smallTag, styles.flex, styles.itemsCenter]}>
            <AntDesign
              name="dislike1"
              size={15}
              color={COLORS.dangerBackground}
            />
            <Text>4.8</Text>
          </Pressable>

          <Text>14.000 avis</Text>
        </View>

        <View
          style={[
            styles.flex,
            styles.priceContainer,
            styles.minorTopPadding,
            styles.minorMargin,
            styles.itemsCenter,
            styles.itemsAround,
          ]}
        >
          <Text>10 000 FCFA</Text>

          <AntDesign name="infocirlceo" size={15} color="black" />
        </View>

        {/* Descriptiond e l'article */}

        <Text style={[styles.minorTopPadding, styles.descriptionText]}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
        </Text>

        {/* Les boutons d'actions */}

        <View
          style={[
            styles.flex,
            styles.itemsCenter,
            styles.contentCenter,
            styles.buBtn,
          ]}
        >
          <Pressable
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              width: "70%",
              alignItems: "center",
            }}
          >
            <AntDesign name="shoppingcart" size={24} color={COLORS.white} />
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text style={{ color: COLORS.white }}>Acheter</Text>
            </View>
          </Pressable>

          <Pressable
            style={{
              borderWidth: 1,
              borderColor: COLORS.productBackground,
              padding: 12,
              borderRadius: 10,
            }}
          >
            <AntDesign name="hearto" size={18} />
          </Pressable>

          <Pressable
            style={{
              borderWidth: 1,
              borderColor: COLORS.productBackground,
              padding: 12,
              borderRadius: 10,
            }}
          >
            <AntDesign name="warning" size={18} />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemsAround: {
    justifyContent: "space-between",
  },
  minorGap: {
    gap: 10,
  },
  minorTopPadding: {
    paddingTop: 10,
  },
  minorBottomPadding: {
    paddingBottom: 10,
  },
  minorMargin: {
    marginTop: 10,
  },
  smallTag: {
    borderColor: COLORS.productBackground,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  flex: {
    flexDirection: "row",
    gap: 5,
  },
  itemsCenter: {
    alignItems: "center",
  },
  contentCenter: {
    justifyContent: "center",
  },
  root: {
    backgroundColor: COLORS.productBackground,
  },
  topContainer: { flex: 1 },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // or 'contain' or 'stretch' or 'repeat'
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: "white",
    padding: 15,
  },
  tag: {
    backgroundColor: COLORS.success,
    padding: 5,
    color: COLORS.tagBackground,
    borderRadius: 5,
  },

  priceContainer: {
    backgroundColor: COLORS.productBackground,
    padding: 10,
    borderRadius: 10,
  },

  descriptionText: {
    textAlign: "justify",
  },

  buBtn: {
    borderTopWidth: 1,
    borderTopColor: COLORS.productBackground,
    paddingTop: 10,
    marginTop: 10,
    paddingBottom: 30,
  },
});

export default Index;
