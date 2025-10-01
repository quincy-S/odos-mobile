import { View, Text, FlatList, StyleSheet } from 'react-native';
import StoresCard from './StoresCard';
import { dummyProducts } from '../../mock';


const Stores = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dummyProducts.title}</Text>
      <FlatList
        data={dummyProducts.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoresCard product={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 16,
    marginBottom: 10,
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 16,
  },
});

export default Stores;
