import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigations/navigationTheme";
import AppNavigator from "./app/navigations/AppNavigator";
import AuthNavigator from "./app/navigations/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
        {/* <AppNavigator /> */}
      </NavigationContainer>
    </>
  );
}
