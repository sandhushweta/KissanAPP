import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/Colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import { containerStyle } from "../styles";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100",
        backgroundColor: COLORS.TOP_BAR_COLOR,
      }}>
      <TopBar RightIcon={"menu"} LeftIcon={"bell"} />
      <View
        style={{
          width: "100%",
          height: 160,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 100,
          gap: 5,
        }}>
        <View
          style={{
            backgroundColor: "white",
            width: 150,
            height: 150,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            elevation: 5,
          }}></View>
        <View
          style={{
            backgroundColor: "white",
            width: 150,
            height: 150,
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            elevation: 5,
          }}></View>
      </View>
      <View
        style={{
          width: "100%",
          height: 160,
          flexDirection: "row",
          justifyContent: "center",
          gap: 5,
          marginTop: -5,
          elevation: 5,
        }}>
        <View
          style={{
            backgroundColor: "white",
            width: 150,
            height: 150,
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            elevation: 5,
          }}></View>
        <View
          style={{
            backgroundColor: "white",
            width: 150,
            height: 150,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            elevation: 5,
          }}></View>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          width: 60,
          height: 60,
          borderRadius: 100,
          marginLeft: 200,
          marginTop: -200,
        }}></View>

      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          gap: 20,
          marginTop: 300,
        }}>
        <View
          style={{
            backgroundColor: COLORS.HOME_CARD_COLOR,
            width: 200,
            height: "100%",
            borderTopRightRadius: 40,
          }}></View>

        <View
          style={{
            backgroundColor: COLORS.HOME_CARD_COLOR,
            width: 15,
            height: "100%",
            marginTop: -350,
            zIndex: -1,
            right: 2,
          }}></View>
        <View
          style={{
            backgroundColor: COLORS.HOME_CARD_COLOR,
            width: 200,
            height: "100%",
            borderTopLeftRadius: 40,
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
