import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CaptureComponent } from "./capture.component";
import { HomeComponent } from "./home.component";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator options={{ headerShown: false }}>
    <Screen
      name="Home"
      component={HomeComponent}
      options={{ headerShown: false }}
    />
    <Screen name="Capture" component={CaptureComponent} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
