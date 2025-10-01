import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MainContainer = ({ children }) => {
  return (
    // <SafeAreaView style={styles.container}>
    // <StatusBar barStyle="light-content" backgroundColor="#000000" /
    <ScrollView style={styles.container}>{children}</ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default MainContainer;
