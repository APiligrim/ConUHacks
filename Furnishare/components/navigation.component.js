import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CaptureComponent } from "./capture.component";
import { HomeComponent } from "./home.component";
import { AddItemComponent } from "./add-item.component";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator options={{ headerShown: false }}>
    <Screen
      name="Home"
      component={HomeComponent}
      options={{ headerShown: false }}
    />
    <Screen
      name="Capture"
      options={{ headerShown: false }}
      component={CaptureComponent}
    />
    <Screen
      name="Add item"
      options={{ headerShown: false }}
      component={AddItemComponent}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
