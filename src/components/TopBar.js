import * as React from "react";

import { Appbar } from "react-native-paper";
import { COLORS } from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopBar = ({ navigation, leftIcon, mode, title }) => {
  const _handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaProvider>
      <Appbar.Header
        style={{
          justifyContent: "space-between",
          backgroundColor: mode ? COLORS.TOP_BAR_COLOR : COLORS.DARK_THEME,
        }}>
        <Appbar.Action
          color={!mode && "white"}
          icon={leftIcon}
          onPress={_handleBack}
        />

        <Appbar.Content title={title}></Appbar.Content>
        {title !== "About" && (
          <Appbar.Action
            color={!mode && "white"}
            icon={"account-circle"}
            onPress={() => {
              navigation.navigate("Profile", { mode: mode });
            }}
          />
        )}
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TopBar;
