import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import MainContainer from "../components/MainContainer";
import ProductList from "../components/ProductList";
import { productSections } from "../../mock";
import Carousel from "../components/Carousel";

// example slides: first uses a local asset (you already have this in your project),
// the others use remote images as a fallback so the example works without extra local files.
const slides = [
  {
    image: require("../../assets/images/slide_m.png"), // keep this if you already have it
    title: "New Arrivals",
    subtitle: "Men's fashion",
    price: "Asking price from GHC50.00",
    cta: "see more",
  },
  {
    image: require("../../assets/images/slide_o.png"),
    title: "Summer Collection",
    subtitle: "Light & Breezy",
    price: "From GHC30.00",
    cta: "Shop Now",
  },
  {
    image: require("../../assets/images/slide_b.png"),
    title: "Limited Offer",
    subtitle: "Best sellers",
    price: "Up to 40% off",
    cta: "Grab it",
  },
];

const Home = () => {
  return (
    <MainContainer>
      {/* replace your previous sliderContainer with the Carousel component */}
      {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
      <Carousel
        slides={slides}
        height={220}
        autoPlay={true}
        autoPlayInterval={4000}
      />

      {productSections.map((section, index) => (
        <ProductList
          key={index}
          title={section.title}
          products={section.products}
        />
      ))}
      {/* </ScrollView> */}
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default Home;
