import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import MainContainer from "../components/MainContainer";
import SectionSlide from "../components/SectionSlide";
import Market from "../Market/Market";
import Stores from "../Stores/Stores";
import ProductList from "../components/ProductList";
import { productSections } from "../../mock";

const man = require("../../assets/images/slide_m.png");

const Home = () => {
  return (
    <MainContainer>
      <View style={styles.sliderContainer}>
        <View style={styles.textsContainer}>
          <Text style={styles.primaryText}>New Arrivals</Text>
          <Text style={styles.secondaryText}>Men's fashion</Text>
          <Text style={styles.tertiaryText}>Asking price from GHC50.00</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>see more</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={man} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {productSections.map((section, index) => (
          <ProductList
            key={index}
            title={section.title}
            products={section.products}
          />
        ))}
        <Stores />
        <Market />
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  sliderContainer: {
    height: 220,
    position: "relative",
    backgroundColor: "#f3f1f2",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  primaryText: {
    color: "#0088CC",
    fontSize: 13,
    fontWeight: "700",
  },
  secondaryText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  tertiaryText: {
    marginTop: 10,
    fontSize: 12,
    color: "#0088CC",
  },
  textsContainer: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -50 }],
    marginLeft: 34,
    zIndex: 1,
  },
  button: {
    borderRadius: 50,
    paddingVertical: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#d9d9d9",
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 12,
    color: "black",
  },
});

export default Home;
