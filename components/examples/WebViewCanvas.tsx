import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/dimensions";

const fillWindowCode = ` 
  width : 100% ; 
  height : 100% ; 
  background-color : ${"green"};
  margin : 0;
  padding : 0;
  `;

const initHtmlCode = `
  <html>
    <head></head>
    <body style="${fillWindowCode}">
      <canvas id="canvas" width="${WINDOW_WIDTH}" height="${WINDOW_HEIGHT}" style="${fillWindowCode}"></canvas>
    </body>
  </html>
`;

const initJsCode = `
   const canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
      }
`;

export default function WebViewCanvas() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <WebView
        originWhitelist={["*"]}
        source={{ html: initHtmlCode }}
        style={{
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT,
          backgroundColor: "white",
        }}
        injectedJavaScript={initJsCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
