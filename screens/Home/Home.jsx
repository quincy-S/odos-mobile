import React from 'react'
import { StyleSheet, Text, FlatList, View, TouchableOpacity, Image } from 'react-native';
import MainContainer from '../components/MainContainer';
import SectionSlide from '../components/SectionSlide';

const items = [
  {
    id:1,
    sectionName: "Flash Sales",
    sectionItems:[
      {
        id:1,
        itemName:"Electronics",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:2,
        itemName:"Shoes",
        itemDescription:"Insta360 TWO RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:3,
        itemName:"Cars",
        itemDescription:"Insta360 THREE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:4,
        itemName:"Spare Parts",
        itemDescription:"Insta360 OFOURNE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:5,
        itemName:"Kitchenware",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:6,
        itemName:"Electronics",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 60fps...",
        itemPrice:"GHC 250.00"
      }
    ]
  },
  {
    id:2,
    sectionName: "Men's Fashion",
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
    sectionName: "Women's Fashion",
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
  },
  {
    id:4,
    sectionName: "Stores",
    sectionItems:[
      {
        id:1,
        itemName:"Zara Clothing",
        itemDescription:"Women's fashion 1",
        itemPrice:""
      },
      {
        id:2,
        itemName:"Zara Clothing",
        itemDescription:"Women's fashion 2",
        itemPrice:""
      },
      {
        id:3,
        itemName:"Zara Clothing",
        itemDescription:"Women's fashion 3",
        itemPrice:""
      },
      
      {
        id:4,
        itemName:"Spare Parts",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 4 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:5,
        itemName:"Kitchenware",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 5 60fps...",
        itemPrice:"GHC 250.00"
      },
      {
        id:6,
        itemName:"Electronics",
        itemDescription:"Insta360 ONE RS 4K Edition- Waterproof 4K 6 60fps...",
        itemPrice:"GHC 250.00"
      }
    ]
  },
  {
    id:5,
    sectionName: "Markets",
    sectionItems:[
      {
        id:1,
        itemName:"Zara Clothing",
        itemDescription:"Women's fashion",
        itemPrice:""
      },
      {
        id:2,
        itemName:"Zara Clothing",
        itemDescription:"Women's fashion",
        itemPrice:""
      },
      {
        id:3,
        itemName:"Zara Clothing",
        itemDescription:"Women's fashion",
        itemPrice:""
      },
      {
        id:4,
        itemName:"Zara Clothing",
        itemDescription:"Women's fashion",
        itemPrice:""
      }
    ]
  }
  
]

// const renderHeader = () => (
//       <View style={styles.sliderContainer}>
//         <View style={styles.textsContainer}>
//           <Text style={styles.primaryText}>New Arrivals</Text>
//           <Text style={styles.secondaryText}>Men's fashion</Text>
//           <Text style={styles.tertiaryText}>Asking price from GHC50.00</Text>
          
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>see more</Text>
//           </TouchableOpacity>
//         </View>
        
//       </View>
// )

const man = require('../../assets/images/slide_m.png')

const Home = () => {
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
        <Image style={styles.image} source = {man}/>
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

  },
  que:{
    paddingBottom:'20'
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
  }

});

export default Home
