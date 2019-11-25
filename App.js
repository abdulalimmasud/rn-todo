import React from "react";
import MainApp from "./src/MainApp";
// import AsyncStorage from "@react-native-community/async-storage";
//import * as SecureStore from "expo-secure-store";

export default function App() {
  // SecureStore.setItemAsync("@myKey", {
  //   userId: "1",
  //   token: "this is my access token"
  // });
  return (
    <MainApp />
    // <View style={styles.container}>
    //   <Header />
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
