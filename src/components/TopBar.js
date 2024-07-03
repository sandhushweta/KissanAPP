import * as React from "react";

import { Appbar } from "react-native-paper";
import { COLORS } from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopBar = ({ navigation, RightIcon, LeftIcon }) => {
  const _goBack = () => {
    navigation.navigate("ComponentNavigation");
  };

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaProvider>
      <Appbar.Header
        style={{
          justifyContent: "space-between",
          backgroundColor: COLORS.TOP_BAR_COLOR,
        }}>
        <Appbar.Action icon={RightIcon} onPress={_handleMore} />
        <Appbar.Action icon={LeftIcon} onPress={_handleSearch} />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TopBar;
