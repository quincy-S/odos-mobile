import { View, Text, FlatList, StyleSheet } from 'react-native';
import MarketCard from './MarketCard';
import { marketSections } from '../../mock';

const Market = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{marketSections.title}</Text>
      <FlatList
        horizontal
        data={marketSections.data}
        renderItem={({ item }) => <MarketCard section={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
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

export default Market;
