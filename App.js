import React from "react";
import { View, StyleSheet } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

const App = () => {
  //componentDidMount
  const unsubscribe = NetInfo.addEventListener((netInfo) =>
    console.log(netInfo)
  );

  //ComponentWillMount
  unsubscribe();
  return <View></View>;
};

const styles = StyleSheet.create({});

export default App;
