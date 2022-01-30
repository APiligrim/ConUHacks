import React from "react";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  Button,
} from "@ui-kitten/components";

export const CaptureComponent = ({ navigation }) => {
  const navigateHomeScreen = () => {
    navigation.popToTop();
  };

  return (
    <>
      <TopNavigation title="Sign Out" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Successfully signed out</Text>
        <Button onPress={navigateHomeScreen}>Exit</Button>
      </Layout>
    </>
  );
};
