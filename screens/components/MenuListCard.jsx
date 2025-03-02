import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import MenuListItem from './MenuListItem'

const MenuListCard = ({item}) => {
  return (
    <View style={styles.container}>
       <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
       </View>
       <View style={styles.itemsContainer}>
        {item.menuItems.map(el => <MenuListItem key={el.id} item={el}/>)}
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // height:418,
        flex:1,
        width:"100%",
        //IOS
        shadowColor: '#000',        // Shadow color
        shadowOffset: { width: 0, height: 1 }, // Offset (x, y)
        shadowOpacity: 0.3,         // Opacity of the shadow
        shadowRadius: 10, 
        borderRadius:10,
        //android
        elevation: 4, // Higher elevation for softer, more spread-out shadow
        shadowColor: '#000', // Required for elevation to pick the color on Android
        // backgroundColor: 'white', // Ensures the shadow is visible (not transparent)
    },
    titleText:{
        fontWeight:"bold"
    },
    titleContainer:{
        padding:10,
        paddingLeft:20,
    },
    itemsContainer:{
        backgroundColor:"#d9d9d9",
        padding:20,
        // flex:1,
        gap:5
    }
})

export default MenuListCard