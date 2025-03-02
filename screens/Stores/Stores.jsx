import React from 'react'
import { StyleSheet, Text, FlatList, View, TouchableOpacity, Image } from 'react-native';
import MainContainer from '../components/MainContainer';
import SectionSlide from '../components/SectionSlide';

const items = [
  {
    id:1,
    sectionName: "Favourite Stores",
    sectionItems:[
      {
        id:1,
        itemName:"Electronics",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00",
        link:"CustomerStorePage"
      },
      {
        id:2,
        itemName:"Electronics",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00",
        link:"CustomerStorePage"
      },
      {
        id:3,
        itemName:"Electronics",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00",
        link:"CustomerStorePage"
      }
    ]
  },
  {
    id:2,
    sectionName: "Residential Stores",
    sectionItems:[
      {
        id:1,
        itemName:"Men's fashion",
        itemDescription:"Wrangler Men's iconic Denim Regular Fit Snap Shirt...",
        itemPrice:"GHC 250.00"
      },
      {
        id:2,
        itemName:"Men's fashion",
        itemDescription:"Wrangler Men's iconic Denim Regular Fit Snap Shirt...",
        itemPrice:"GHC 250.00"
      },
      {
        id:3,
        itemName:"Men's fashion",
        itemDescription:"Wrangler Men's iconic Denim Regular Fit Snap Shirt...",
        itemPrice:"GHC 250.00"
      }
    ]
  },
  {
    id:3,
    sectionName: "Popular brands",
    sectionItems:[
      {
        id:1,
        itemName:"Women's fashion",
        itemDescription:"Alex Evenings Women's 3 4 Sleeve Stretch Lace Bodice...",
        itemPrice:"GHC 250.00"
      },
      {
        id:2,
        itemName:"Women's fashion",
        itemDescription:"Alex Evenings Women's 3 4 Sleeve Stretch Lace Bodice...",
        itemPrice:"GHC 250.00"
      },
      {
        id:3,
        itemName:"Women's fashion",
        itemDescription:"Alex Evenings Women's 3 4 Sleeve Stretch Lace Bodice...",
        itemPrice:"GHC 250.00"
      }
    ]
  }
  
]

const ora = require('../../assets/images/slide_o.png')


const renderHeader = () => (
      <View style={styles.sliderContainer}>
        <View style={styles.textsContainer}>
          <Text style={styles.primaryText}>New Arrivals</Text>
          <Text style={styles.secondaryText}>Men's fashion</Text>
          <Text style={styles.tertiaryText}>Asking price from GHC50.00</Text>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>see more</Text>
          </TouchableOpacity>
        </View>
        
      </View>
)

const Stores = () => {
  return (
    <MainContainer>      
      <View style={styles.sliderContainer}>
        <View style={styles.textsContainer}>
          <Text style={styles.primaryText}>New Arrivals</Text>
          <Text style={styles.secondaryText}>Men's fashion</Text>
          <Text style={styles.tertiaryText}>Asking price from GHC50.00</Text>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>see more</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source = {ora}/>
      </View>
      {/* {items?.map(item => <SectionSlide key={item.id} item ={item}/>)} */}
        <FlatList 
          data={items}
          keyExtractor={(item) => item.id}
          // ListHeaderComponent={renderHeader}
          renderItem={({item}) => 
            <SectionSlide item ={item}/>
          }
          contentContainerStyle={styles.que}
        />
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    borderWidth:2
  },
  image: { flex: 1, width: '100%', resizeMode:"cover" }, 
  sliderContainer: {
    height:220,
    position:"relative",
    backgroundColor:'#f3f1f2',
    width:"100%",
    shadowColor: '#000',        // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Offset (x, y)
    shadowOpacity: 0.3,         // Opacity of the shadow
    shadowRadius: 4,
    elevation:4
  },
  que:{
    padding:10,
    paddingBottom:'20'
  },
  flatList: {
    // flex: 1,
    // width:"100%",
    borderWidth:1
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
    fontSize:12,
    color:"#0088CC"
  },
  textsContainer:{
    width:"fit-content",
    zIndex:1,
    position:"absolute",
    transform: [{ translateX: 0 }, { translateY: -50 }],
    top:"50%",
    marginLeft:34
  },
  button:{    
    borderRadius: 50,          
    paddingVertical: 5,  
    marginTop:10,     
    paddingHorizontal: 10,      
    backgroundColor: "#d9d9d9", 
    alignSelf: 'flex-start'
  },
  buttonText: {
    fontSize: 12,              
    color: 'black',             
  },

});

export default Stores
