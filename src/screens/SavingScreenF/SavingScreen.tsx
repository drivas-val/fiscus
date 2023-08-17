import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Color } from "../../constants/color";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";
import { Data } from "./components/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SavingScreen({ navigation }: any) {
  const [amount, setAmount] = React.useState("");
  const [days, setDays] = React.useState("");
  const [style, setStyle] = React.useState("");
  const [shouldShow, setShouldShow] = React.useState(false);
  const [time, setTime] = React.useState("");
  let bool = true;

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Amount").then((value) => {
        if (value != null) {
          navigation.navigate("SavingSubmitScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Days").then((value) => {
        if (value != null) {
          setDays(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Style").then((value) => {
        if (value != null) {
          setStyle(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Time").then((value) => {
        if (value != null) {
          setTime(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setData = async () => {
    const now = Date.now();
    let startOfDay = (now - (now % 86400000)).toString();

    if (amount.length == 0) {
      bool = false;
    } else {
      try {
        await AsyncStorage.setItem("Amount", amount);
      } catch (error) {
        console.log(error);
      }
    }
    if (days.length == 0 && style == "fixed") {
      bool = false;
    } else {
      try {
        await AsyncStorage.setItem("Days", days);
      } catch (error) {
        console.log(error);
      }
    }
    if (style.length == 0) {
      bool = false;
    } else {
      try {
        await AsyncStorage.setItem("Style", style);
      } catch (error) {
        console.log(error);
      }
    }
    if (bool == false) {
      Alert.alert("Oops! Looks like you are missing an input.");
    } else {
      try {
        await AsyncStorage.setItem("Time", time);
        navigation.navigate("SavingSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const selectedStyle = () => {
    if (style === "envelop" || style === "triangle") {
      setShouldShow(false);
    } else if (style === "fixed") {
      setShouldShow(true);
    }
  };

  const passSubmit = () => {
    setTime((Date.now() - (Date.now() % 86400000)).toString());
    setData();
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
        <Text style={styles.title}>Saving Style</Text>
        <SelectList
          defaultOption={Data[0]}
          data={Data}
          setSelected={setStyle}
          onSelect={selectedStyle}
          maxHeight={120}
          boxStyles={{
            width: 200,
            borderWidth: 2,
            borderColor: "navy",
            padding: 8,
            margin: 10,
            borderRadius: 20,
          }}
          dropdownStyles={{
            marginBottom: 25,
            borderColor: "navy",
          }}
          dropdownTextStyles={{
            fontFamily: "Cochin",
            fontSize: 15,
          }}
        />
        <Text style={styles.title}>Amount You Want To Save</Text>
        <TextInput
          style={styles.textBox}
          placeholder="$"
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(val) => setAmount(val)}
        />
        {shouldShow ? (
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Number of Days</Text>
            <TextInput
              style={styles.textBox}
              placeholder="$"
              keyboardType="numeric"
              returnKeyType="done"
              onChangeText={(val) => setDays(val)}
            />
          </View>
        ) : null}
        {/* (Date.now() - (Date.now() % 86400000)).toString() */}
        <TouchableOpacity onPress={passSubmit}>
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
  textBox: {
    borderWidth: 2,
    borderColor: "navy",
    padding: 8,
    margin: 10,
    width: 200,
    marginBottom: 10,
    borderRadius: 20,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "navy",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
});
