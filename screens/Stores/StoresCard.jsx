import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const StoresCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => setLiked(!liked)}
        >
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            size={16}
            color={liked ? "red" : "#888"}
          />
        </TouchableOpacity>
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.subtitle}>{product.shop}</Text>
        <Text style={styles.rating}>
          {product.rating.toFixed(1)}{" "}
          <FontAwesome name="star" size={12} color="#000" /> ({product.reviews})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    position: "relative",
    height: 180,
    backgroundColor: "#f3f3f3",
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
  subtitle: {
    fontSize: 11,
    color: "#555",
    marginTop: 2,
  },
  rating: {
    fontSize: 11,
    marginTop: 4,
    color: "#333",
  },
});

export default StoresCard;
