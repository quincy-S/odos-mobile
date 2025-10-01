import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MarketCard = ({ section }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <Image source={section.image} style={styles.image} />
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

      {/* Label */}
      <Text style={styles.label} numberOfLines={1}>
        {section.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 130,
    marginRight: 12,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    zIndex: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    textAlign: 'start',
    paddingVertical: 8,
    paddingHorizontal: 6,
    fontSize: 13,
    fontWeight: '500',
    color: '#222',
  },
});

export default MarketCard;
