import React, {useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native'
import MainContainer from '../../components/MainContainer'

const man = require('../../../assets/images/man-img.png')

const CartPage = () => {
    const [toggleState, setToggleState] = useState({
        description: false,
        vendor: false,
        reviews: false
    })
    const heightAnim = useRef(new Animated.Value(0)).current
    const descriptionHeightAnim = useRef(new Animated.Value(0)).current
    const reviewsHeightAnim = useRef(new Animated.Value(0)).current

    function handleSelect(key) {
        setToggleState((prevState) => ({
          ...prevState,
          [key]: !prevState[key], // Toggle the specific key
        }))
      }

      useEffect(() => {
        Animated.timing(heightAnim, {
            toValue:toggleState.vendor ? 160 : 0,
            duration:500,
            useNativeDriver:false
        }).start()
      }, [toggleState.vendor])

      useEffect(() => {
        Animated.timing(reviewsHeightAnim, {
            toValue:toggleState.reviews ? 160 : 0,
            duration:500,
            useNativeDriver:false
        }).start()
      }, [toggleState.reviews])

      useEffect(() => {
        Animated.timing(descriptionHeightAnim, {
            toValue:toggleState.description ? 350 : 0,
            duration:500,
            useNativeDriver:false
        }).start()
      }, [toggleState.description])

  return (
    <MainContainer>
        <ScrollView style={styles.container}>
            {/* <MenuCard /> */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Product Details</Text>
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={man}/>
                    <View style={styles.gallery}>
                     </View>
                </View>
                <View style={styles.imageDescriptionContainer}>
                    <View>
                    <Text style={styles.imageDescriptionContainerHeader}>Hanes Sport Men's Polo Shirt, 
                        Men's Cool DRI Moisture-Wicking 
                        Performance Polo Shirt
                    </Text>
                    <View style={styles.stockInfoContainer}>
                        <Text style={styles.stockDescriptor}>In Stock</Text>
                        <Text style={styles.stockAmount}>(500 items)</Text>
                    </View>
                    <Text style={styles.price}>GHC 250.00</Text>
                    <Text style={styles.review}>(0 review)</Text>
                    <Text style={styles.productDescription}>Perfect for beginners, this camera bundle offers the essential tools needed to 
                        take your SLR skills to new heights, all in one convenient package. 
                    </Text>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.quantityContainerText}>Quantity:</Text>
                        <View style={styles.counter}>
                            <TouchableOpacity style={styles.counterButtons}>
                                <Text style={styles.counterButtonText}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.counterNumber}>
                                <Text style={styles.counterButtonText}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.counterButtons}>
                                <Text style={styles.counterButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.addToCartButton}>
                            <Text style={styles.addToCartText}>ADD TO CART</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.counterButtons}></TouchableOpacity>
                        <TouchableOpacity style={styles.counterButtons}></TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.brandContainer}>
                        <Text style={styles.brandTitle}>Brand:</Text>
                        <Text style={styles.brandName}>Apollo Fashion</Text>
                    </View>
                    
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <TouchableOpacity style={styles.descriptionContainerHeader} onPress={() => handleSelect("description")}>
                    <View style={styles.thickLine}></View>
                    <View style={styles.descriptionContainerTitle}>

                        <Text style={styles.descTitle}>Description</Text>
                        
                            <Text>+</Text>
                    </View>
                </TouchableOpacity>

                <Animated.View style={[styles.descriptionContainerBody, {height: descriptionHeightAnim}]}>
                    <Text style={styles.descText}>The Canon EOS Rebel SL3 Digital SLR Camera is a versatile and lightweight camera that is perfect for capturing high-quality photos and videos. With its 24.1 Megapixel CMOS (APS-C) sensor and DIGIC 8 Image Processor, this camera delivers stunning image quality with excellent detail and clarity.
                        The EOS Rebel SL3 also features Dual Pixel CMOS AF, which provides fast and accurate autofocus during both photo and video shooting. This makes it easy to capture the perfect shot, even when your subject is moving.

                        This camera is also equipped with a Vari-angle Touchscreen LCD that can be rotated to various angles for easy framing and shooting at different angles. The touchscreen interface is intuitive and user-friendly, making it easy to access the camera's many features and settings.

                        In addition, the EOS Rebel SL3 offers built-in Wi-Fi and Bluetooth connectivity, allowing you to easily transfer photos and videos to your smart devices or share them on social media. The camera also includes a built-in feature guide to help you learn how to use its various functions and settings
                    </Text>
                </Animated.View>

                <TouchableOpacity style={styles.descriptionContainerHeader} onPress={() => handleSelect("vendor")}>
                    <View style={styles.thickLine}></View>
                    <View style={styles.descriptionContainerTitle} >
                        <Text style={styles.descTitle}>Vendor</Text>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
                <Animated.View style={[styles.descriptionContainerBody, {height:heightAnim}]}>
                    <View style={styles.vendorInfo}>
                        <View style={styles.vendorImageContainer}>
                            <Image style={styles.vendorImage} source={man}/>
                            
                        </View>
                        <View style={styles.vendorImageDescriptionContainer}>
                            {/* <Image style={styles.image} source={man}/> */}
                            <View>
                                <Text style={styles.imageDescriptionContainerHeader}>Zara Clothing
                                </Text>
                                <Text style={styles.review}>(0 review)</Text>
                                <View style={styles.vendorDeetsContainer}>
                                <View style={styles.vendorDeets}>
                                    <Text style={styles.vendorDeetsText}>Store :</Text>
                                    <Text style={styles.vendorDeetsText}>Zara Clothing</Text>
                                </View>
                                <View style={styles.vendorDeets}>
                                    <Text style={styles.vendorDeetsText}>Address:</Text>
                                    <Text style={styles.vendorDeetsText}>Accra, Ghana</Text>
                                </View>
                                <View style={styles.vendorDeets}>
                                    <Text style={styles.vendorDeetsText}>Phone:</Text>
                                    <Text style={styles.vendorDeetsText}></Text>
                                </View>
                                <View style={styles.vendorDeets}>
                                    <Text style={styles.vendorDeetsText}>Email:</Text>
                                    <Text style={styles.vendorDeetsText}>admin@gmail.com</Text>
                                </View>
                                </View>
                                
                            </View>
                            <View style={styles.actionButtons}>
                                    <TouchableOpacity style={styles.addToCartButton}>
                                        <Text style={styles.addToCartText}>VISIT STORE</Text>
                                    </TouchableOpacity>
                            
                                </View>
                        
                        </View>
                    </View>
                </Animated.View>
                 
                <TouchableOpacity style={styles.descriptionContainerHeader} onPress={() => handleSelect("reviews")}>
                    <View style={styles.thickLine}></View>
                    <View style={styles.descriptionContainerTitle}>

                        <Text style={styles.descTitle}>Reviews</Text>
                        <Text>+</Text>
                        
                    </View>
                </TouchableOpacity>
                <Animated.View style={[styles.descriptionContainerBody, {height:reviewsHeightAnim}]}>
                </Animated.View>
            </View>
        </ScrollView>

    </MainContainer>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20
    },
    vendorDeetsContainer:{
        marginTop:10
    },
    vendorImage:{width: '100%', height:120, resizeMode:"cover", borderRadius:5},
    vendorImageContainer:{
        flex:0.5,borderRadius:5, justifyContent:"space-between"
    },
    vendorImageDescriptionContainer:{
        flex:0.5, justifyContent:"space-between"
    },

    thickLine:{
        borderWidth:0.6
    },
    vendorInfo:{
        flexDirection:"row",
        gap:10
    },
    vendorDeets:{
        flexDirection:"row"
    },
    vendorDeetsText: {
        fontSize:9
    },
    descTitle:{
        fontSize:20,
        fontWeight:"bold"
    },
    descText: {
        marginBottom:20,
        fontSize:12
    },
    descriptionContainer: {
        //android
        marginVertical:50,
        elevation: 4, // Higher elevation for softer, more spread-out shadow
        shadowColor: '#000', // Required for elevation to pick the color on Android
        // backgroundColor: 'white', // Ensures the shadow is visible (not transparent)

       borderRadius:10,
       backgroundColor:"#d9d9d9",
       padding:20,
       // flex:1,
       gap:10
    },
    descriptionContainerHeader: {
        gap:10
    },
    descriptionContainerTitle: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    descriptionContainerBody: {
        transition:"max-h",
        overflow:"hidden"
    },
    hiddenDescriptionContainerBody:{
        maxHeight:0,
        overflow:"hidden",
        transition: "max-height 0.5s"
    },

    brandTitle:{fontSize:12, fontWeight:"bold"},
    brandName:{fontSize:12},
    brandContainer:{height:40, alignItems:"center", flexDirection:"row", gap:2},
    image: { width: '100%', resizeMode:"cover", borderRadius:5 },
    titleContainer:{
        padding:10,
        paddingLeft:20,
        // borderWidth:1,
        backgroundColor:"white"
    },
    titleText:{
        fontWeight:"bold"
    },
    imageContainer:{flex:0.5,borderRadius:5, justifyContent:"space-between", height:260},
    imageDescriptionContainer:{flex:0.5, height:260, justifyContent:"space-between"},
    imageDescriptionContainerHeader:{
        fontWeight:"bold",
        fontSize:10
    },
    gallery:{
        backgroundColor:"white",
        height:40
    },
    stockDescriptor:{
        backgroundColor:"white",
        alignSelf:"flex-start",
        fontWeight:"bold",
        paddingHorizontal:3,
        fontSize:10
        // marginTop:5
    },
    stockAmount:{
        fontSize:10
    },
    stockInfoContainer:{
        marginTop:10,
        flexDirection:"row",
        gap:8
    },
    actionButtons:{
        marginTop:5,
        flexDirection:"row",
        gap:5
    },
    price:{
        marginTop:10,
        fontSize:10,
        fontWeight:"bold"
    },
    productDescription:{
        fontSize:8,
        marginTop:10
    },
    addToCartText:{
        fontSize:10
    },
    addToCartButton:{
        backgroundColor:"white",
        alignSelf:"flex-start",
        paddingHorizontal:5,
        paddingVertical:3,
        borderRadius:10,
        borderWidth:1
    },
    review:{
        marginTop:5,
        fontSize:10
    },
    quantityContainer:{
        marginTop:10,
        flexDirection:"row",
        gap:5
    },
    quantityContainerText:{
        fontSize:10
    },
    counter:{
        flexDirection:"row",
        gap:5
    },
    counterButtonText: {
        textAlign: "center",
        textAlignVertical: "center",  // Ensures vertical centering (Android)
        fontSize: 10,  // Adjust if necessary
    },
    counterNumber:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"white",
        width:40,
        height:15,
        fontSize:8,
        alignItems:"center"
    },
    counterButtons:{
        borderRadius:15/2,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"white",
        width:15,
        height:15,
        justifyContent:"center",
        alignItems:"center",
    },
    menuContainer: {
                 //android
                 elevation: 4, // Higher elevation for softer, more spread-out shadow
                 shadowColor: '#000', // Required for elevation to pick the color on Android
                 // backgroundColor: 'white', // Ensures the shadow is visible (not transparent)
                flexDirection:"row",
                borderRadius:10,
                backgroundColor:"#d9d9d9",
                padding:20,
                // flex:1,
                gap:10
       },
})

export default CartPage