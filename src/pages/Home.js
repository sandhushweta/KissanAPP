import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import { containerStyle } from "../styles";

const Home = ({ navigation }) => {
  const [mode, setMode] = useState(true);
  const WelcomeLogoImage = require("../../assets/img/Weather.png");
  const ShopLogoImage = require("../../assets/img/Shop.jpeg");
  const UserLogoImage = require("../../assets/img/User.jpeg");
  const LightLogoImage = require("../../assets/img/light.png");
  const DarkLogoImage = require("../../assets/img/dark.jpeg");

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100",
        backgroundColor: mode ? COLORS.TOP_BAR_COLOR : COLORS.DARK_THEME,
      }}>
      <TopBar
        mode={mode}
        RightIcon={"menu"}
        LeftIcon={"account-circle"}
        navigation={navigation}
      />
      <View
        style={{
          width: "100%",
          height: 160,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 100,
          gap: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Weather", { mode: mode });
          }}>
          <View
            style={{
              backgroundColor: mode ? "white" : "gray",
              borderColor: !mode && "white",
              borderWidth: 3,
              width: 150,
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              elevation: 20,
            }}>
            <Image
              style={{ height: 100, width: 100 }}
              source={WelcomeLogoImage}
            />
            <Text style={{ fontSize: 14, fontWeight: "700", marginTop: -21 }}>
              Weather
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Shops", { mode: mode });
          }}>
          <View
            style={{
              backgroundColor: mode ? "white" : "gray",
              borderColor: !mode && "white",
              borderWidth: 3,
              width: 150,
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 40,
              borderBottomRightRadius: 40,
              elevation: 20,
            }}>
            <Image
              style={{ height: 65, width: 65, marginTop: 10 }}
              source={ShopLogoImage}
            />
            <Text style={{ fontSize: 14, fontWeight: "700" }}>Shops</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          height: 160,
          flexDirection: "row",
          justifyContent: "center",
          gap: 5,
          marginTop: -5,
          elevation: 20,
        }}>
        
        {/* dark mode and light mode feature starting here  */}

        <TouchableOpacity
          onPress={() => {
            if (!mode) {
              setMode(true);
            } else {
              setMode(false);
            }
          }}>
          <View
            style={{
              backgroundColor: mode ? "white" : "gray",
              borderColor: !mode && "white",
              borderWidth: 3,
              width: 150,
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 40,
              borderBottomRightRadius: 40,
              elevation: 20,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image
              style={{ height: 70, width: 70 }}
              source={!mode ? DarkLogoImage : LightLogoImage}
            />
            <Text style={{ fontSize: 14, fontWeight: "700" }}>Mode</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile", { mode: mode });
          }}>
          <View
            style={{
              backgroundColor: mode ? "white" : "gray",
              borderColor: !mode && "white",
              borderWidth: 3,
              width: 150,
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 40,
              borderBottomLeftRadius: 40,
              elevation: 20,
            }}>
            <Image style={{ height: 80, width: 80 }} source={UserLogoImage} />
            <Text style={{ fontSize: 14, fontWeight: "700", marginBottom: 15 }}>
              About
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          width: 60,
          height: 60,
          borderRadius: 100,
          marginLeft: 150,
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
            width: 155,
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
            width: 155,
            height: "100%",
            borderTopLeftRadius: 40,
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TOP_BAR_COLOR,
  },
});
