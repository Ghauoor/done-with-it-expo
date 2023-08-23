import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import listingApi from "../api/listings";
import Card from "../components/Card";
import colors from "../config/colors";
import Route from "../navigations/Route";
import Screen from "../components/Screen";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);
  const loadListings = async () => {
    const response = await listingApi.getListings();
    setListings(response.data);
    console.log(response.data);
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(Route.LISING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 6,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
