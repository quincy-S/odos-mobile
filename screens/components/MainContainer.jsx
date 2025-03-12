import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

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