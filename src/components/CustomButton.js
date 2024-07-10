import {  Text, TouchableOpacity, View } from "react-native";

import React from "react";

const CustomButton = ({ title }) => {
  return (
    <View>
      <TouchableOpacit
        style={{
          width: 300,
          height: 50,
          backgroundColor: "#f5e000",
          justifyContent: "center",
          borderRadius: 20,
        }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{title}</Text>
      </TouchableOpacit>
    </View>
  );
};

export default CustomButton;