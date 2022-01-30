import React, { useEffect, useState } from "react";
import { Divider, Layout, TopNavigation, Button } from "@ui-kitten/components";
import { Camera } from "expo-camera";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const CaptureComponent = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    try {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        console.log(data.uri, 'picture data');

        navigation.navigate("Add item", data)
    } catch (error) {
      console.log(error, "ERROR <<<<<<<<<<<<<");
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={()=>{takePicture()}}>
             <Image resizeMode="contain" style={{width:250 , height:70} } source={(require('../assets/capture.png'))}/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.1,
    backgroundColor: "transparent",
    display: "flex",

    position: "absolute",
    bottom: 50,
  },
  button: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
