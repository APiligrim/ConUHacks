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
import FurnitureIcon from "../assets/chair.png";
import ElectronicsIcon from "../assets/laptop.png";
import ClothingIcon from "../assets/shirt.png";

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
      >
        <MapIcons />
      </MapView>
    </Layout>
  );
};

const MapIcons = () => {
  return (
    <>
      <Marker coordinate={{ latitude: 45.5290677, longitude: -73.5535644 }}>
        <Image source={FurnitureIcon} style={{ height: 30, width: 30 }} />
      </Marker>
      <Marker coordinate={{ latitude: 45.5240677, longitude: -73.5538654 }}>
        <Image source={ElectronicsIcon} style={{ height: 30, width: 30 }} />
      </Marker>
      <Marker coordinate={{ latitude: 45.5344909, longitude: -73.5500644 }}>
        <Image source={ClothingIcon} style={{ height: 30, width: 30 }} />
      </Marker>
      <Marker coordinate={{ latitude: 45.5398999, longitude: -73.5500644 }}>
        <Image source={ElectronicsIcon} style={{ height: 30, width: 30 }} />
      </Marker>
      <Marker coordinate={{ latitude: 45.5302002, longitude: -73.5580644 }}>
        <Image source={FurnitureIcon} style={{ height: 30, width: 30 }} />
      </Marker>
    </>
  );
};
