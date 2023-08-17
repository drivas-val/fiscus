import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BudgetSubmitScreen({ navigation, route }: any) {
  const [rent, setRent] = React.useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Rent").then((value) => {
        if (value != null) {
          setRent(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("Rent");
      navigation.navigate("BudgetScreen");
    } catch {
      console.log("error");
    }
  };

  return (
    <SafeAreaView>
      <Text>{rent}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
