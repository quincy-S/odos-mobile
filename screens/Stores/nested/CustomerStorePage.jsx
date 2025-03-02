import React from 'react'
import MainContainer from '../../components/MainContainer'
import { View, StyleSheet, Text } from 'react-native'
import ItemCard from '../../components/ItemCard'

const storeItems = [
    {
        id:1,
        itemName:"Electronics",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:2,
        itemName:"Beam",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:3,
        itemName:"Kaem",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      }
]

const CustomerStorePage = () => {
    // console.log(storeItems)
  return (
    <MainContainer>
        <View style={styles.sliderContainer}>
            <View style={styles.textsContainer}>
              <Text style={styles.primaryText}>Zara Collection</Text>
              <Text style={styles.secondaryText}>+233 54 290 0000</Text>
              <Text style={styles.tertiaryText}>admin@gmail.com</Text>
              <Text style={styles.tertiaryText}>Dansoman, Accra</Text>
            </View>
        </View>
        <View>
            {storeItems.map(el => <ItemCard key={el?.id} sectionItem={el}/>)}
        </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
        height:180,
        backgroundColor:'#f3f1f2',
        width:"100%"
      },
      primaryText:{
        color:"#0088CC",
        fontSize:13,
        fontWeight: "700"
      },
      secondaryText:{
        fontSize:19,
        fontWeight: "bold"
      },
      tertiaryText:{
        marginTop:10,
        fontSize:11,
        color:"#0088CC"
      },
      textsContainer:{
        width:"fit-content",
        marginTop:30,
        marginLeft:34
      },
      itemsContainer:{
        borderWidth:4,
        height:50
      }
})

export default CustomerStorePage
