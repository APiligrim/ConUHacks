import React from "react";
import MapView from "react-native-maps";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  Button,
} from "@ui-kitten/components";
import { Dimensions } from "react-native";

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
          height: Dimensions.get("window").height,
        }}
      />
    </Layout>
  );
};
