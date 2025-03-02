import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MenuListCard from '../components/MenuListCard';
import MainContainer from '../components/MainContainer';

const menuList = [
  {
    id:1,
    title:"Account",
    menuItems:[
      {
        id:1,
        name:"Orders"
      },
      {
        id:2,
        name:"Reviews"
      },
      {
        id:3,
        name:"Saved Items"
      },
      {
        id:4,
        name:"Saved Stores"
      },
      {
        id:5,
        name:"Wallet"
      },
      {
        id:6,
        name:"Address"
      },
      {
        id:7,
        name:"Request to be Vendor"
      },
      {
        id:8,
        name:"Chats"
      },
    ]
  },
  {
    id:2,
    title:"Resources",
    menuItems:[
      {
        id:1,
        name:"How to create a store?"
      },
      {
        id:2,
        name:"What are the components of Odebay"
      },
      {
        id:3,
        name:"How to track your orders?"
      },
      {
        id:4,
        name:"How you can request to be a vendor?"
      },
      {
        id:5,
        name:"How does the odebay wallet work?"
      },
      {
        id:6,
        name:"How to set up your address?"
      },
      {
        id:7,
        name:"How to make payment on Odebay?"
      },
      {
        id:8,
        name:"How to make good use of the chat feature?"
      },
      {
        id:9,
        name:"Blogs"
      },
    ]
  },
  {
    id:3,
    title:"Notification",
    menuItems:[
      {
        id:1,
        name:"Cart"
      },
      {
        id:2,
        name:"Wishlist"
      },
      {
        id:3,
        name:"Messages"
      }
    ]
  },
  {
    id:4,
    title:"Help and support",
    menuItems:[
      {
        id:1,
        name:"Contact us"
      },
      {
        id:2,
        name:"Find Odebay offices"
      },
      {
        id:3,
        name:"Send feedback"
      }
    ]
  },
  {
    id:5,
    title:"Legal",
    menuItems:[
      {
        id:1,
        name:"Legal policy"
      }
    ]
  },
  {
    id:6,
    title:"Settings",
    menuItems:[
      {
        id:1,
        name:"Legal policy"
      }
    ]
  },
]

const More = () => {
  return (
    <MainContainer>

      <View style={styles.container}>
        <FlatList 
          data = {menuList}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => 
          <MenuListCard item={item}/>}
          contentContainerStyle={styles.que}
        />
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    border:"2px solid red",
    backgroundColor: '#fff',
    // alignItems: 'center',
    
    // gap:50,
    // justifyContent: 'center',
  },
  que:{
    paddingBottom:'20',
    // borderWidth:2,
    // flex:1,
    padding:10,
    gap:20
  },
});

export default More