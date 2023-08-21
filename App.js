import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title="Go to the TweetsDetails"
//       onPress={() => navigation.navigate("TweetsDetails")}
//     />
//   );
// };

// Tweets Screen
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Click"
      onPress={() => {
        navigation.navigate("TweetsDetails");
      }}
    />
  </Screen>
);

const TweetsDetails = ({ route }) => (
  // if in the child component then use route hook
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetsDetails"
      component={TweetsDetails}
      options={({ route: { params } }) => ({ title: params.id.toString() })}
    />
  </Stack.Navigator>
);
const Account = () => (
  <Screen>
    <Text>Account Screen</Text>
  </Screen>
);

// Bottom navigation
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Tweets} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
