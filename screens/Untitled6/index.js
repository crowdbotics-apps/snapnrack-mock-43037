import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

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
          <View style={styles.colCon}>
            <ImageBackground style={styles.logo} source={{
            uri: "https://snapnrack.com/wp-content/themes/snapnrack/dist/images/logo_3ba30c84.png"
          }} resizeMode="cover"></ImageBackground>
            <ImageBackground style={styles.ycFKTBzp} source={require("./Screenshot 2023-08-23 at 10.34.24 AM.png")} resizeMode="cover"></ImageBackground>
          </View>
        </View>
        <View style={styles.colCon}>
          <View style={styles.col1}>
            <Text style={styles.h1}>Ultra Rail Configuration Tool</Text>
            <View style={styles.section}>
              <Text style={styles.h2}>Project Info:</Text>
              <View style={styles.separator} />
              <View style={styles.colCon}>
                <View style={styles.col1Sub}>
                  <Text style={styles.field}>Company</Text>
                  <Text style={styles.field}>Project Name</Text>
                </View>
                <View style={styles.col2Sub}>
                  <TextInput style={styles.textInput}></TextInput>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>{"PV Module Data:"}</Text>
              <View style={styles.separator} />
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Module brand"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Model"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>{"Environmental Requirements:"}</Text>
              <View style={styles.separator} />
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Exposure Category"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Building Standard"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Snow Load"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Wind Speed"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Rafter Spacing"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Roof Attachment"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"End Clamp Preference"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Array Skirt(s)"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Rail Finish"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"3 Rail Option?"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Microinverter/Optimizer (MLPE) Attachment Kits"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
              <View style={styles.colCon}>
                <View style={styles.colConSub}>
                  <Text style={styles.field}>{"Tilt Up?"}</Text>
                  <TextInput style={styles.textInput}></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h2}>Project Info:</Text>
              <View style={styles.separator} />
              <View style={styles.colCon}>
                <View style={styles.col1Sub}>
                  <Text style={styles.field}>Company</Text>
                  <Text style={styles.field}>Project Name</Text>
                </View>
                <View style={styles.col2Sub}>
                  <View style={styles.padding}>
                    <TextInput style={styles.textInput}></TextInput>
                  </View>
                  <View style={styles.padding}>
                    <TextInput style={styles.textInput}></TextInput>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.col2}></View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  col1: {
    flex: 1,
    width: "75%",
    paddingLeft: 60,
    paddingRight: 30
  },
  col2: {
    flex: 1,
    width: "25%",
    paddingLeft: 60,
    paddingRight: 30
  },
  col1Sub: {
    flex: 1
  },
  col2Sub: {
    flex: 1,
    width: "75%"
  },
  colCon: {},
  colConSub: {
    width: "90%",
    flexDirection: "row",
    padding: 10
  },
  field: {
    marginTop: 6,
    flex: 1
  },
  h1: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#333333",
    marginBottom: 10,
    marginTop: 10
  },
  h2: {
    fontSize: 24,
    color: "#333333",
    marginBottom: 5,
    marginTop: 5
  },
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
    paddingLeft: 30,
    paddingTop: 10,
    width: "100%"
  },
  padding: {
    marginTop: 5,
    marginBottom: 5
  },
  safeArea: {
    height: "100%"
  },
  separator: {
    backgroundColor: "#333333",
    height: 1,
    width: "100%"
  },
  section: {
    marginTop: 10
  },
  logo: {
    width: 138,
    height: 39,
    flex: 1
  },
  lWLiFaqw: {
    backgroundColor: "#FFFFFF"
  },
  topLineImage: {
    width: 1383,
    height: 32
  },
  ycFKTBzp: {
    width: 883,
    height: 62,
    position: "absolute",
    left: 470,
    top: -13
  },
  textInput: {
    backgroundColor: "#F0F0F2",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    marginTop: 10,
    width: 319,
    height: 30,
    left: 20
  }
});
export default Untitled6;