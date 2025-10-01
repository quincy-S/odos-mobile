import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const Carousel = ({
  slides = [],
  height = 220,
  autoPlay = true,
  autoPlayInterval = 4000,
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatRef = useRef(null);
  const autoPlayTimer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && slides.length > 1) {
      startAutoPlay();
      return () => stopAutoPlay();
    }
  }, [currentIndex, slides, autoPlay]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      flatRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
      autoPlayTimer.current = null;
    }
  };

  const onMomentumScrollEnd = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width, height }]}>
      {item.image ? (
        <Image source={item.image} style={[styles.image, { width, height }]} />
      ) : item.imageUri ? (
        <Image
          source={{ uri: item.imageUri }}
          style={[styles.image, { width, height }]}
        />
      ) : (
        <View style={[styles.imagePlaceholder, { width, height }]} />
      )}

      <View style={[styles.overlay, { height }]}>
        {item.title ? <Text style={styles.title}>{item.title}</Text> : null}
        {item.subtitle ? (
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        ) : null}
        {item.price ? <Text style={styles.price}>{item.price}</Text> : null}
        {item.cta ? (
          <TouchableOpacity style={styles.ctaBtn} activeOpacity={0.8}>
            <Text style={styles.ctaText}>{item.cta}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );

  return (
    <View>
      <Animated.FlatList
        ref={flatRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => String(i)}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onTouchStart={stopAutoPlay}
        onTouchEnd={() => autoPlay && startAutoPlay()}
      />

      <View style={styles.dots} pointerEvents="none">
        {slides.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.33, 1, 0.33],
            extrapolate: "clamp",
          });
          return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
        })}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  slide: {
    overflow: "hidden",
    backgroundColor: "#f3f1f2",
  },
  image: {
    resizeMode: "cover",
  },
  imagePlaceholder: {
    backgroundColor: "#ddd",
  },
  overlay: {
    position: "absolute",
    left: 24,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    zIndex: 2,
  },
  title: {
    color: "#0088CC",
    fontSize: 13,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 4,
  },
  price: {
    marginTop: 10,
    fontSize: 12,
    color: "#0088CC",
  },
  ctaBtn: {
    borderRadius: 50,
    paddingVertical: 6,
    marginTop: 10,
    paddingHorizontal: 12,
    backgroundColor: "#d9d9d9",
    alignSelf: "flex-start",
  },
  ctaText: {
    fontSize: 12,
    color: "black",
  },
  dots: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.9)",
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
});
