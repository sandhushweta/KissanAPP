import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Card } from "react-native-paper"; // Assuming you're using React Native Paper for UI components
import TopBar from "../components/TopBar";
import WebView from "react-native-webview";

const Shops = ({ navigation, route }) => {
  const { mode } = route.params; // Assuming mode is passed from navigation params

  // Dummy data for shops (replace with actual data from your API or state)

  const [displayUrl, setDisplayUrl] = useState("");
  const shops = [
    {
      id: 1,
      name: "Dasuya Fresh Mart",
      location: "123 Main Bazar, Dasuya",
      latitude: 31.821,
      longitude: 75.7225,
      url: "https://www.google.com/maps/place/Main+Bazaar+Rd,+old+city,+Dasuya,+Punjab+144205/@31.8159455,75.6466129,675m/data=!3m2!1e3!4b1!4m10!1m2!2m1!1s123+Main+Bazar,+Dasuya!3m6!1s0x391ba1316cc229d3:0x1d1c056e2dc48430!8m2!3d31.8159456!4d75.6514838!15sChYxMjMgTWFpbiBCYXphciwgRGFzdXlhkgEFcm91dGXgAQA!16s%2Fg%2F11hd6wg45v?entry=ttu",
    },
    {
      id: 2,
      name: "Organic Farms Dasuya",
      location: "456 Green Avenue, Dasuya",
      latitude: 31.8135,
      longitude: 75.7185,
      url: "https://www.google.com/maps/place/Eco+Farm/@31.8587737,75.5736848,10797m/data=!3m1!1e3!4m10!1m2!2m1!1sOrganic+Farms+Dasuya!3m6!1s0x391ba1b108b04ccd:0x722ca69268b361ce!8m2!3d31.8587737!4d75.6499025!15sChRPcmdhbmljIEZhcm1zIERhc3V5YVoWIhRvcmdhbmljIGZhcm1zIGRhc3V5YZIBDW9yZ2FuaWNfc3RvcmXgAQA!16s%2Fg%2F11q4k2yvck?entry=ttu",
    },
    {
      id: 3,
      name: "Green Valley Grocery",
      location: "789 Near Bus Stand, Dasuya",
      latitude: 31.8182,
      longitude: 75.7243,
      url: "https://www.google.com/maps/place/Green+Garden+Nursery/@31.7924293,75.4941734,30660m/data=!3m1!1e3!4m10!1m2!2m1!1sGreen+Valley+Grocery+Dasuya+!3m6!1s0x391ba1b883ac9f23:0x9771895e6a7a3ac7!8m2!3d31.87914!4d75.636015!15sChtHcmVlbiBWYWxsZXkgR3JvY2VyeSBEYXN1eWGSAQ1wbGFudF9udXJzZXJ54AEA!16s%2Fg%2F11j31tzzy2?entry=ttu",
    },
    {
      id: 4,
      name: "Dasuya Agro Stores",
      location: "101 Civil Lines, Dasuya",
      latitude: 31.8244,
      longitude: 75.7178,
      url: " https://www.google.com/maps/place/CM+AGRO+DASUYA/@31.8273994,75.6509113,1011m/data=!3m1!1e3!4m10!1m2!2m1!1sDasuya+Agro+Stores!3m6!1s0x391ba17b112c7815:0x3cfcfd071181930d!8m2!3d31.8266267!4d75.6572531!15sChJEYXN1eWEgQWdybyBTdG9yZXOSAQ50cmFjdG9yX2RlYWxlcuABAA!16s%2Fg%2F11vs2bk5l6?entry=ttu",
    },
    // {
    //   id: 5,
    //   name: "Golden Harvest Farm Shop",
    //   location: "234 Khera Road, Dasuya",
    //   latitude: 31.8163,
    //   longitude: 75.7151,
    // },
  ];

  const handleShopPress = (shop) => {
    // Navigate to shop detail or map screen with shop details
    // Example navigation.navigate('ShopDetail', { shop });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        navigation={navigation}
        title="Shops"
        leftIcon="arrow-left"
        mode={mode}
      />

      <WebView
        source={{ uri: displayUrl }}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      />
      <ScrollView horizontal={true} style={styles.shopList}>
        {shops.map((shop) => (
          <>
            <TouchableOpacity
              key={shop.id}
              style={styles.card}
              onPress={() => setDisplayUrl(shop.url)}>
              <Card>
                <Card.Content>
                  <Text style={styles.shopName}>{shop.name}</Text>
                  <Text style={styles.shopLocation}>{shop.location}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f0f0f0",
  },
  shopList: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  card: {
    paddingHorizontal: 10,
    width: 450,
    marginRight: 10,
    height: 400,
  },
  shopName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  shopLocation: {
    fontSize: 14,
    color: "#666",
  },
});

export default Shops;
