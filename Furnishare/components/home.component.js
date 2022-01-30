import React from "react";
import MapView, { Marker } from "react-native-maps";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  Button,
  Card,
} from "@ui-kitten/components";
import { Dimensions, View, Image } from "react-native";

export const HomeComponent = ({ navigation }) => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height + 50,
        }}
      />
      <Marker coordinate={{ latitude: 45.5230677, longitude: -73.5535644 }}>
        <Image
          source={require("../assets/chair.png")}
          style={{ height: 30, width: 30 }}
        />
      </Marker>
    </Layout>
  );
};
