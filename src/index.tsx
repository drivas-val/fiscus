import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreenF/HomeScreen";
import SavingScreen from "./screens/SavingScreenF/SavingScreen";
import CheckerScreen from "./screens/CheckerScreenF/CheckerScreen";
import BudgetScreen from "./screens/BudgetScreenF/BudgetScreen";
import { Color } from "./constants/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RootStack from "./RootStack";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="RootStack" component={RootStack} />
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
                    tintColor: focused ? Color.forest : Color.darkGreen,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Budget"
          component={BudgetScreen}
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
          component={SavingScreen}
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
                    tintColor: focused ? Color.forest : Color.darkGreen,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Checker"
          component={CheckerScreen}
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
