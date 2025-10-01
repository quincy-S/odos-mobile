import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";


const MainContainer = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ffffff",
        paddingTop: StatusBar.currentHeight,
        flex:1
    }
})

export default MainContainer