import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color } from "../../../constants/color";

export default function CheckerSubmitScreen({ navigation, route }: any) {
  const [salary, setSalary] = React.useState("");
  const [needs, setNeeds] = React.useState("");
  const [wants, setWants] = React.useState("");
  const [savings, setSavings] = React.useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Salary").then((value) => {
        if (value != null) {
          setSalary(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Needs").then((value) => {
        if (value != null) {
          setNeeds(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Wants").then((value) => {
        if (value != null) {
          setWants(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Savings").then((value) => {
        if (value != null) {
          setSavings(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("Salary");
      await AsyncStorage.removeItem("Needs");
      await AsyncStorage.removeItem("Wants");
      await AsyncStorage.removeItem("Savings");
      navigation.navigate("CheckerScreen");
    } catch {
      console.log("error");
    }
  };

  const salaryNum = parseFloat(salary);
  const needsNum = parseFloat(needs);
  const wantsNum = parseFloat(wants);
  const savingsNum = parseFloat(savings);
  const needsPercent = Math.round((needsNum / salaryNum) * 100);
  const wantsPercent = Math.round((wantsNum / salaryNum) * 100);
  const savingsPercent = Math.round((savingsNum / salaryNum) * 100);
  const idealNeeds = Math.round(salaryNum * 0.5);
  const idealWants = Math.round(salaryNum * 0.3);
  const idealSavings = Math.round(salaryNum * 0.2);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.Salary}>${salary}</Text>
        <Text
          style={{
            height: 2,
            width: "100%",
            backgroundColor: "black",
            margin: 5,
          }}
        ></Text>
        <Text style={styles.comparison}>Ideal</Text>
        <View style={styles.row}>
          <Text style={styles.type}>Needs - </Text>
          <Text style={styles.percent}>50% : </Text>
          <Text style={styles.number}>${idealNeeds}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.type}>Wants - </Text>
          <Text style={styles.percent}>30% : </Text>
          <Text style={styles.number}>${idealWants}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.type}>Savings - </Text>
          <Text style={styles.percent}>20% : </Text>
          <Text style={styles.number}>${idealSavings}</Text>
        </View>
        <Text
          style={{
            height: 2,
            width: "100%",
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <Text style={styles.comparison}>Current</Text>
        <View style={styles.row}>
          <Text style={styles.type}>Needs - </Text>
          <Text style={styles.percent}>{needsPercent}% : </Text>
          <Text style={styles.number}>${needs}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.type}>Wants - </Text>
          <Text style={styles.percent}>{wantsPercent}% : </Text>
          <Text style={styles.number}>${wants}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.type}>Savings - </Text>
          <Text style={styles.percent}>{savingsPercent}% : </Text>
          <Text style={styles.number}>${savings}</Text>
        </View>
        <Text
          style={{
            height: 2,
            width: "100%",
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <TouchableOpacity onPress={removeData}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Restart</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Salary: {
    fontFamily: "Didot",
    fontSize: 50,
    fontWeight: "bold",
    color: "green",
  },
  row: {
    flexDirection: "row",
  },
  percent: {
    fontFamily: "Didot",
    fontSize: 30,
    fontWeight: "bold",
    color: "navy",
  },
  number: {
    fontFamily: "Didot",
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
  comparison: {
    fontFamily: "Didot",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  type: {
    fontFamily: "Didot",
    fontSize: 30,
    fontWeight: "bold",
    color: "navy",
  },
  button: {
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: Color.forest,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
});
