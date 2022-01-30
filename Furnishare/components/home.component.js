import React, { useState, useEffect } from "react";
import MapView, { Marker, Overlay } from "react-native-maps";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  Button,
  Card,
  Icon,
} from "@ui-kitten/components";
import { Dimensions, View, Image, Platform, StyleSheet } from "react-native";
import * as Location from "expo-location";

import FurnitureIcon from "../assets/chair.png";
import ElectronicsIcon from "../assets/laptop.png";
import ClothingIcon from "../assets/shirt.png";

const PlusIcon = (props) => {
  return (
    <Image
      {...props}
      source={require("../assets/camera.png")}
      style={{
        ...props.style,
        tintColor: "inherit",
        height: props.style.height + 5,
        width: props.style.width + 5,
        marginHorizontal: props.style.marginHorizontal - 2,
      }}
    />
  );
};

export const HomeComponent = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

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
        region={{
          ...location?.coords,
          latitudeDelta: 0.07,
          longitudeDelta: 0.05,
        }}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height + 50,
        }}
      >
        <MapIcons />
      </MapView>
      <Button
        style={{
          position: "absolute",
          bottom: 50,
          borderRadius: 15,
        }}
        accessoryLeft={PlusIcon}
      >
        ADD ITEM
      </Button>
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
