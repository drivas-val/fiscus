import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreenF/HomeScreen";
import SavingScreen from "./screens/SavingScreenF/SavingScreen";
import CheckerScreen from "./screens/CheckerScreenF/CheckerScreen";
import BudgetScreen from "./screens/BudgetScreenF/BudgetScreen";
import { Color } from "./constants/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckerSubmitScreen from "./screens/CheckerScreenF/CheckerSubmitF/CheckerSubmitScreen";
import SavingSubmitScreen from "./screens/SavingScreenF/components/SavingSubmitScreen";
import BudgetSubmitScreen from "./screens/BudgetScreenF/components/BudgetSubmitScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CheckerScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CheckerScreen"
        component={CheckerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckerSubmitScreen"
        component={CheckerSubmitScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SavingScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SavingScreen"
        component={SavingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavingSubmitScreen"
        component={SavingSubmitScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function BudgetScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BudgetScreen"
        component={BudgetScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BudgetSubmitScreen"
        component={BudgetSubmitScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/homeIcon.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "navy" : Color.darkGreen,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Budget"
          component={BudgetScreens}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/budget.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? Color.forest : Color.darkGreen,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Savings"
          component={SavingScreens}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/saving.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "navy" : Color.darkGreen,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Checker"
          component={CheckerScreens}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("../assets/checker.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? Color.forest : Color.darkGreen,
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
