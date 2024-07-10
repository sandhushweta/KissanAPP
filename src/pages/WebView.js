import { StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

const CustomWebView = () => {

    const route = useRoute();
    const { url } = route.params;
  return (
    

<WebView
        source={{ uri: url }}
        style={{
          flex: 1,
          width: "100%",
          height: 500,
        }}
      />

  )
}

export default CustomWebView

const styles = StyleSheet.create({})