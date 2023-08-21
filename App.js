import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";

import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}
