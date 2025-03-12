import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Animated, PanResponder, Platform } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ItemCard from './ItemCard'
import { Dimensions } from 'react-native'

const SectionSlide = ({item}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const {width} = Dimensions.get("window")
    const slideAnim = useRef(new Animated.Value(0)).current;
    const arrowImageWIdth = 25
    const arrowImagePadding = 5
    const containerPadding = 20;

    const cardsContainerWidth = width - ((arrowImagePadding*2 + arrowImageWIdth)*2 + (containerPadding*2))
    const totalItems = item?.sectionItems?.length || 0

    const itemsPerPage = 2;
    const itemGap = (4/100) * cardsContainerWidth;

    const cardsContainerPadding = 5
    // Each item should be exactly half of the container
    const itemWidth = (cardsContainerWidth - (itemGap + (cardsContainerPadding*2))) / itemsPerPage; 

    // Ensure totalWidth correctly moves by two items
    const totalWidth = itemWidth * itemsPerPage + itemGap*2;
    const SWIPE_THRESHOLD = totalWidth * 0.3;

    useEffect(() => {
        Animated.spring(slideAnim, {
            toValue: -currentIndex * totalWidth / 2, 
            // duration: 300, // Adjust duration as needed
            useNativeDriver: true, // For better performance
        }).start();
    }, [currentIndex]);

    function goToNextItem() {
        if (currentIndex + itemsPerPage < totalItems) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function goToPrevItem() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 10,
            onPanResponderMove: (_, gestureState) => {
                slideAnim.setValue(-currentIndex * totalWidth + gestureState.dx);
            },
            onPanResponderRelease: (_, gestureState) => {
                let newIndex = currentIndex;
            
                if (gestureState.dx < -SWIPE_THRESHOLD && currentIndex + itemsPerPage < totalItems) {
                    newIndex = currentIndex + 1; // Swipe Left → Move Forward
                } else if (gestureState.dx > SWIPE_THRESHOLD && currentIndex > 0) {
                    newIndex = currentIndex - 1; // Swipe Right → Move Back
                }
            
                setCurrentIndex(newIndex); // Update index
            
                Animated.spring(slideAnim, {
                    toValue: -newIndex * totalWidth /2, // Ensure it lands at exact position
                    useNativeDriver: true,
                }).start();
            }
            // onPanResponderRelease: (_, gestureState) => {
            //     if (gestureState.dx < -SWIPE_THRESHOLD && currentIndex + itemsPerPage < totalItems) {
            //         setCurrentIndex(prevIndex => prevIndex + 1); // Swipe Left → Next
            //     } else if (gestureState.dx > SWIPE_THRESHOLD && currentIndex > 0) {
            //         setCurrentIndex(prevIndex => prevIndex - 1); // Swipe Right → Previous
            //     } 
            //     Animated.spring(slideAnim, {
            //         toValue: -currentIndex * totalWidth,
            //         useNativeDriver: true,
            //     }).start();
            // },
        })
    ).current;

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            {item?.sectionName}
        </Text>
        <View style={styles.slider} {...panResponder.panHandlers}>
            <View style={styles.leftArrow}>
                <TouchableOpacity onPress={goToPrevItem} disabled={currentIndex === 0}>
                    <AntDesign 
                        name="leftcircleo" 
                        size={arrowImageWIdth} 
                        color={currentIndex === 0 ? "#ccc" : "black"} />
                </TouchableOpacity>
            </View>
            <View style={[styles.cardsContainer, {paddingHorizontal: cardsContainerPadding}]}>
                    
                    {/* {item?.sectionItems
                        ?.slice(currentIndex, currentIndex + itemsPerPage)
                        .map(el => (
                            <ItemCard width={itemWidth} key={el?.id} sectionItem={el} />
                        ))} */}
                    <Animated.View
                        style={{
                            gap:itemGap,
                            flexDirection: 'row',
                            width: totalItems * (itemWidth + itemGap),
                            transform: [{ translateX: slideAnim }]
                            // justifyContent:"center"
                        }}
                    >
                        {item?.sectionItems.map(el => (
                            <ItemCard width={itemWidth} key={el?.id} sectionItem={el} />
                        ))}
                    </Animated.View>

            </View>
            <View style={styles.rightArrow}>
                <TouchableOpacity 
                    onPress={goToNextItem} 
                    disabled={currentIndex + itemsPerPage >= totalItems}
                >
                    <AntDesign name="rightcircleo" size={arrowImageWIdth} color={currentIndex + itemsPerPage >= totalItems ? "#ccc" : "black"} 
                    />
                </TouchableOpacity>
            </View>
            {/* <AntDesign name="rightcircleo" size={25} color={"black"}/> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       marginTop:20,
        marginHorizontal:20
    },
    // flatList:
    slider:{
        borderRadius:5,
        marginTop:5,
        paddingVertical:10,
        backgroundColor:"#d9d9d9",
        height:200,
        width:"100%",
        flexDirection:"row",
        shadowColor: '#000',        // Shadow color
        shadowOffset: { width: 0, height: 1 }, // Offset (x, y)
        shadowOpacity: 0.3,         // Opacity of the shadow
        shadowRadius: 10,  

         //android
         elevation: 10, // Higher elevation for softer, more spread-out shadow
         shadowColor: '#000', // Required for elevation to pick the color on Android
        //  backgroundColor: 'white', // Ensures the shadow is visible (not transparent)
    },
    title:{
        fontSize:13,
        marginLeft:18,
        fontWeight:"bold"
    },
    leftArrow:{
        alignSelf:"flex-start",
        height:"100%",
        paddingHorizontal:5,
        justifyContent:"center"
    },
    rightArrow:{
        alignSelf:"flex-end",
        paddingHorizontal:5,
        height:"100%",
        justifyContent:"center"
    },
    cardsContainer:{
        flexDirection:"row",
        paddingVertical:5,
        flex:1,
        // gap:12,
        overflow:"hidden"
        
    }
})

export default SectionSlide