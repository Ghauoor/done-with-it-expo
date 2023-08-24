import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

const App = () => {
  const netInfo = useNetInfo();

  return netInfo.isInternetReachable ? (
    <View style={{ padding: 44 }}>
      <Text>Internet is connected</Text>
    </View>
  ) : (
    <View>
      <Text>Internet is not connected</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
