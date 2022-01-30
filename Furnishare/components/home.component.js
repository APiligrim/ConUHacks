import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  Layout,
  Text,
  Button,
  Card,
  Icon,
  Modal,
  ButtonGroup,
  Input,
} from "@ui-kitten/components";
import { Dimensions, View, Image, Platform, StyleSheet } from "react-native";
import * as Location from "expo-location";

import FurnitureIcon from "../assets/chair.png";
import ElectronicsIcon from "../assets/laptop.png";
import ClothingIcon from "../assets/shirt.png";

const StarIcon = (props) => <Icon {...props} name="star" />;

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

const searchIcon = (props) => <Icon {...props} name="search-outline" />;
export const HomeComponent = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const setItemClaimed = () => {};
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getCurrentLocation();
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
        <MapIcons visible={visible} setVisible={setVisible} />
      </MapView>
      <Input
        value={value}
        placeholder="Search for nearby items"
        accessoryLeft={searchIcon}
        onChangeText={(nextValue) => setValue(nextValue)}
        style={{
          position: "absolute",
          top: 20,
          borderRadius: 15,
          width: Dimensions.get("window").width - 10,
        }}
      />
      <Button
        style={{
          position: "absolute",
          top: 70,
          right: 10,
          borderRadius: 15,
        }}
        accessoryLeft={(props) => (
          <Icon
            {...props}
            name="compass-outline"
            style={{ ...props.style, marginHorizontal: 5 }}
          />
        )}
        onPress={() => {
          getCurrentLocation();
        }}
      />
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
      <Modal
        visible={visible}
        backdropStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onBackdropPress={() => setVisible(false)}
        style={{ padding: 0 }}
      >
        <Image
          source={require("../assets/couch2.png")}
          style={{
            width: Dimensions.get("window").width - 80,
            height: Dimensions.get("window").width - 80,
            borderColor: "#fff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <Card
          style={{
            backgroundColor: "#EC9370",
            maxWidth: Dimensions.get("window").width - 80,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: "#EC9370",
          }}
        >
          <Text category={"h3"} style={{ color: "white" }}>
            One seater couch
          </Text>
          <Text category={"s1"} style={{ color: "white", marginBottom: 10 }}>
            Looks great but has one tiny tear at the back - overall great find!
          </Text>
          <ButtonGroup
            appearance="ghost"
            style={{ alignSelf: "center" }}
            size="giant"
          >
            <Button accessoryLeft={StarIcon} />
            <Button accessoryLeft={StarIcon} />
            <Button accessoryLeft={StarIcon} />
          </ButtonGroup>
          <Text category={"s1"} style={{ color: "white", alignSelf: "center" }}>
            Available Until: 02/02/2022
          </Text>
          <Button
            onPress={() => setItemClaimed()}
            accessoryRight={(props) => (
              <Icon {...props} name="checkmark-circle-2-outline" />
            )}
            style={{
              width: "60%",
              alignSelf: "center",
              marginVertical: 10,
            }}
            status="success"
          >
            CLAIMED
          </Button>
        </Card>
      </Modal>
    </Layout>
  );
};

const MapIcons = ({ visible, setVisible }) => {
  return (
    <>
      <Marker
        coordinate={{ latitude: 45.5290677, longitude: -73.5535644 }}
        onPress={() => setVisible(true)}
        style={{ margin: 20 }}
      >
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
