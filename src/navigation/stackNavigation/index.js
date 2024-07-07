import { StyleSheet, Text, View } from "react-native";

import Home from "../../pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../../pages/Profile";
import React from "react";
import Shops from "../../pages/Shops";
import Weather from "../../pages/Weather";
import Welcome from "../../pages/Welcome";
import { createStackNavigator } from "@react-navigation/stack";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shops" component={Shops} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
