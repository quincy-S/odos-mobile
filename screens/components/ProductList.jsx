import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

const ProductList = ({ title, products }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => <ProductCard {...item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },  
  heading: {
    fontSize: 18,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginBottom: 10,
    color: "#000",
  },
  listContent: {
    paddingHorizontal: 16,
  },
});

export default ProductList;
