import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const shirt = require('../../assets/images/shirt.jpg')
const psp = require('../../assets/images/psp.jpg')
const shoe = require('../../assets/images/shoe.jpg')


const ItemCard = ({sectionItem, width}) => {
    const navigation = useNavigation()
    // const {sectionItem} = props

    const images = [shirt, psp, shoe]

  return (
    <View style={[styles.container, { width: width }]}>
        <View style={styles.topHalf}>
            <Image 
            style={styles.image}
                // source={require('../../assets/images/psp.jpg')}/
                source={images.length > 0 ? images[Math.floor(Math.random() * images.length)] : null}

            />
        </View>
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
                if (sectionItem?.link) {
                    navigation.navigate({ name: sectionItem.link });
                }
            }}
        >
            <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
        
        <View style={styles.bottomHalf}>
            <Text style={styles.itemName}>{sectionItem?.itemName}</Text>
            <Text style={styles.itemDescription}>{sectionItem?.itemDescription}</Text>
            <Text style={styles.itemPrice}>{sectionItem?.itemPrice || `ghc0.00`}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: { flex: 1, width: '100%', resizeMode:"cover" }, 
    container:{
        flexDirection:"column",
        // borderWidth
        backgroundColor:"white",
        borderRadius:5,
        shadowColor: '#000',        // Shadow color
        shadowOffset: { width: 0, height: 1 }, // Offset (x, y)
        shadowOpacity: 0.3,         // Opacity of the shadow
        shadowRadius: 4,

        elevation:5
    },
    topHalf:{
        flex:0.6,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        overflow:"hidden"
    },
    button:{
        justifyContent:"center",
        
        backgroundColor:"#d9d9d9",
        width:"100%",
        flex:0.1,
    },
    itemName:{
        fontSize:10,
        paddingTop:5,
        paddingLeft:5,
    },
    itemDescription:{
        fontSize:8,
        paddingTop:5,
        paddingLeft:5,
    },
    itemPrice:{
        fontWeight:"bold",
        fontSize:9,
        paddingTop:5,
        paddingLeft:5,
    },
    buttonText:{
        fontSize:12,
        alignSelf:"center"
    },
    bottomHalf:{
        flex:0.4
    }
})

export default ItemCard