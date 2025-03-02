import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const MenuListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text>{item.name}</Text>
        <AntDesign name="right" color={"black"}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"auto",
        backgroundColor:"white",
        borderRadius:5,
        padding:7,
        shadowColor: '#000',        // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Offset (x, y)
        shadowOpacity: 0.3,         // Opacity of the shadow
        shadowRadius: 10, 

        elevation: 4, // Higher elevation for softer, more spread-out shadow
        shadowColor: '#000',
        // paddingRight:8,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

export default MenuListItem