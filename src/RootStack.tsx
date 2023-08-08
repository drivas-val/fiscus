import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckerScreen from "./screens/CheckerScreenF/CheckerScreen";
import CheckerSubmitScreen from "./screens/CheckerScreenF/CheckerSubmitF/CheckerSubmitScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="CheckerScreen">
      <Stack.Screen
        name="CheckerSubmitScreen"
        component={CheckerSubmitScreen}
      />
      <Stack.Screen name="CheckerScreen" component={CheckerScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
