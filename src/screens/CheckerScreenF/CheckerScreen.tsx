import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import { Color } from "../../constants/color";
import { HideKeyboard } from "../../components/HideKeyboard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CheckerScreen({ navigation }: any) {
  const [salary, setSalary] = React.useState("");
  const [needs, setNeeds] = React.useState("");
  const [wants, setWants] = React.useState("");
  const [savings, setSavings] = React.useState("");

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Salary").then((value) => {
        if (value != null) {
          navigation.navigate("CheckerSubmitScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Needs").then((value) => {
        if (value != null) {
          navigation.navigate("CheckerSubmitScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Wants").then((value) => {
        if (value != null) {
          navigation.navigate("CheckerSubmitScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Savings").then((value) => {
        if (value != null) {
          navigation.navigate("CheckerSubmitScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (salary.length == 0) {
      console.log("exception");
    } else {
      try {
        await AsyncStorage.setItem("Salary", salary);
      } catch (error) {
        console.log(error);
      }
    }

    if (needs.length == 0) {
      console.log("exception");
    } else {
      try {
        await AsyncStorage.setItem("Needs", needs);
      } catch (error) {
        console.log(error);
      }
    }
    if (wants.length == 0) {
      console.log("exception");
    } else {
      try {
        await AsyncStorage.setItem("Wants", wants);
      } catch (error) {
        console.log(error);
      }
    }
    if (
      parseInt(needs) + parseInt(wants) + parseInt(savings) !=
      parseInt(salary)
    ) {
      Alert.alert(
        "Oops!",
        "Please make sure needs, wants, and savings add up to your income."
      );
    } else {
      try {
        await AsyncStorage.setItem("Savings", savings);
        navigation.navigate("CheckerSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    // On savings.length add the bottom code and delete all other error alerts!
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.info}>
          <Text style={styles.title}>Current Income</Text>
          <TouchableWithoutFeedback
            onPress={() =>
              Alert.alert(
                "Income Info.",
                "This income can be weekly, monthly, or yearly. It is best to choose the income which best correlates to your expenses."
              )
            }
          >
            <Image
              source={require("../../../assets/info.png")}
              resizeMode="contain"
              style={styles.eye}
            />
          </TouchableWithoutFeedback>
        </View>
        <TextInput
          style={styles.textBox}
          placeholder="e.g 1500"
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(val) => setSalary(val)}
        />
        <View style={styles.info}>
          <Text style={styles.title}>How Much Goes Into Needs?</Text>
          <TouchableWithoutFeedback
            onPress={() =>
              Alert.alert(
                "Needs Info.",
                "Needs are expensive essential to living. This includes bills, groceries, gas expenses, etc."
              )
            }
          >
            <Image
              source={require("../../../assets/info.png")}
              resizeMode="contain"
              style={styles.eye}
            />
          </TouchableWithoutFeedback>
        </View>
        <TextInput
          style={styles.textBox}
          placeholder="$"
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(val) => setNeeds(val)}
        />
        <View style={styles.info}>
          <Text style={styles.title}>How Much Goes Into Wants?</Text>
          <TouchableWithoutFeedback
            onPress={() =>
              Alert.alert(
                "Wants Info.",
                "Wants are non-essential expenses. This includes dining out, entertainment, gifts, etc."
              )
            }
          >
            <Image
              source={require("../../../assets/info.png")}
              resizeMode="contain"
              style={styles.eye}
            />
          </TouchableWithoutFeedback>
        </View>
        <TextInput
          style={styles.textBox}
          placeholder="$"
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(val) => setWants(val)}
        />
        <View style={styles.info}>
          <Text style={styles.title}>How Much Goes Into Savings?</Text>
          <TouchableWithoutFeedback
            onPress={() =>
              Alert.alert(
                "Savings Info.",
                "Savings can include money that is invested, saved up for a greater goal, or stashed under your matttress."
              )
            }
          >
            <Image
              source={require("../../../assets/info.png")}
              resizeMode="contain"
              style={styles.eye}
            />
          </TouchableWithoutFeedback>
        </View>
        <TextInput
          style={styles.textBox}
          placeholder="$"
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(val) => setSavings(val)}
        />
        <TouchableOpacity onPress={setData}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
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
  textBox: {
    borderWidth: 2,
    borderColor: Color.forest,
    padding: 8,
    margin: 10,
    width: 200,
    marginBottom: 45,
    borderRadius: 20,
  },
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    color: Color.darkGreen,
  },
  info: {
    flexDirection: "row",
  },
  eye: {
    width: 20,
    height: 20,
    marginLeft: 5,
    tintColor: "blue",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: Color.forest,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
});
