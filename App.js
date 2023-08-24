import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigations/navigationTheme";
import AppNavigator from "./app/navigations/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
