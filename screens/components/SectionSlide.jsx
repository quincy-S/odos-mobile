import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Animated, PanResponder } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ItemCard from './ItemCard'

const SectionSlide = ({item}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideAnim = useRef(new Animated.Value(0)).current;

    const totalItems = item?.sectionItems?.length || 0
    const itemsPerPage = 2
    const itemWidth = 120;
    const itemGap = 12
    const totalWidth = itemWidth + itemGap;
    const SWIPE_THRESHOLD = totalWidth * 0.3;

    useEffect(() => {
        Animated.spring(slideAnim, {
            toValue: -currentIndex * totalWidth, // 12 is the gap
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
                if (gestureState.dx < -SWIPE_THRESHOLD && currentIndex + itemsPerPage < totalItems) {
                    setCurrentIndex(prevIndex => prevIndex + 1); // Swipe Left → Next
                } else if (gestureState.dx > SWIPE_THRESHOLD && currentIndex > 0) {
                    setCurrentIndex(prevIndex => prevIndex - 1); // Swipe Right → Previous
                } 
                Animated.spring(slideAnim, {
                    toValue: -currentIndex * totalWidth,
                    useNativeDriver: true,
                }).start();
            },
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
                        size={25} 
                        color={currentIndex === 0 ? "#ccc" : "black"} />
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                    
                    {/* {item?.sectionItems
                        ?.slice(currentIndex, currentIndex + itemsPerPage)
                        .map(el => (
                            <ItemCard width={itemWidth} key={el?.id} sectionItem={el} />
                        ))} */}
                    <Animated.View
                        style={{
                            gap:itemGap,
                            flexDirection: 'row',
                            transform: [{ translateX: slideAnim }],
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
                    disabled={currentIndex === totalItems}
                >
                    <AntDesign name="rightcircleo" size={25} color={currentIndex === totalItems ? "#ccc" : "black"} 
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
        marginLeft:10,
        marginRight:10
    },
    // flatList:
    slider:{
        borderRadius:5,
        marginTop:5,
        backgroundColor:"#d9d9d9",
        height:200,
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
        paddingLeft:5,
        paddingRight:5,
        justifyContent:"center"
    },
    rightArrow:{
        alignSelf:"flex-end",
        paddingLeft:5,
        paddingRight:5,
        height:"100%",
        justifyContent:"center"
    },
    cardsContainer:{
        flexDirection:"row",
        // border:"1px solid red",
        paddingTop:5,
        paddingLeft:5,
        // justifyContent:"center",
        paddingRight:5,
        paddingBottom:5,
        flex:1,
        gap:12,
        overflow:"hidden",
        
        
    }
})

export default SectionSlide