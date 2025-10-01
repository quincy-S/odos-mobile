import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const ProductCard = ({ image, title, rating, reviews, price, oldPrice }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.productImage} />
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => setLiked(!liked)}
        >
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            size={16}
            color={liked ? "red" : "#222"}
          />
        </TouchableOpacity>
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.rating}>
          {rating} ★★★★☆ ({reviews})
        </Text>
        {oldPrice ? (
          <View style={styles.priceRow}>
            <Text style={styles.price}>GHC {price}</Text>
            <Text style={styles.oldPrice}>GHC {oldPrice}</Text>
          </View>
        ) : (
          <Text style={styles.price}>GHC {price}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    marginVertical: 8,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 8,
    shadowColor: "#00000060",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  imageContainer: {
    position: "relative",
    height: 180,
    backgroundColor: "#f9f9f9",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
  },
  rating: {
    fontSize: 11,
    marginTop: 4,
    color: "#444",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#111",
  },
  oldPrice: {
    fontSize: 12,
    color: "#b33",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },
});

export default ProductCard;
