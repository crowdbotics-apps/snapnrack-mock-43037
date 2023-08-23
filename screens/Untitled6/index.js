import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      backgroundColor: "#ffffff"
    }} style={styles.lWLiFaqw}>
        <View style={styles.topLine}>
          <ImageBackground style={styles.topLineImage} source={require("./Screenshot 2023-08-23 at 10.19.55 AM.png")} resizeMode="cover"></ImageBackground>
        </View>
        <View style={styles.header}>
          <ImageBackground style={styles.CsRsrmVv} source={{
          uri: "https://snapnrack.com/wp-content/themes/snapnrack/dist/images/logo_3ba30c84.png"
        }} resizeMode="cover"></ImageBackground>
        </View>
        <View style={styles.row1}>
          
        </View>
        <View style={styles.row2}></View>
        
        
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    marginLeft: 30,
    marginRight: 30,
    padding: 30,
    width: "100%"
  },
  topLine: {
    backgroundColor: "#273678",
    height: 50,
    paddingTop: 10,
    width: "100%"
  },
  safeArea: {
    height: "100%"
  },
  row1: {
    flex: 1
  },
  row2: {
    flex: 1
  },
  CsRsrmVv: {
    width: 138,
    height: 39
  },
  lWLiFaqw: {
    backgroundColor: "#FFFFFF"
  },
  topLineImage: {
    width: 1440,
    height: 32
  }
});
export default Untitled6;