import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SavingSubmitScreen({ navigation, route }: any) {
  const [amount, setAmount] = React.useState("");
  const [days, setDays] = React.useState("");
  const [style, setStyle] = React.useState("");
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Amount").then((value) => {
        if (value != null) {
          setAmount(value);
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

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("Amount");
      await AsyncStorage.removeItem("Days");
      await AsyncStorage.removeItem("Style");
      await AsyncStorage.removeItem("Time");
      navigation.navigate("CheckerScreen");
    } catch {
      console.log("error");
    }
  };

  if (style === "envelop") {
    var i = 1;
    var total = 0;
    const numArray = [];
    const totalArray = [];
    console.log("One");
    while (total <= parseInt(amount)) {
      numArray.push(i);
      total += i;
      i++;
    }
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
          {numArray.map((num) => {
            var curr = (num * (num + 1)) / 2;
            if (Math.ceil((Date.now() - parseInt(time)) / 86400000) == num) {
              return (
                <View key={num} style={styles.nowBox}>
                  <Text style={styles.nowBoxText}>
                    Day: {num} | Total: {curr}
                  </Text>
                </View>
              );
            } else {
              return (
                <View key={num} style={styles.box}>
                  <Text style={styles.boxText}>
                    Day: {num} | Total: {curr}
                  </Text>
                </View>
              );
            }
          })}
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <Text>Amount - {amount}</Text>
        <Text>Days - {days}</Text>
        <Text>Style - {style}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "navy",
    marginBottom: 20,
    borderTopWidth: 5,
    paddingVertical: 15,
  },
  boxText: {
    fontFamily: "Didot",
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
    marginHorizontal: "10%",
  },
  nowBox: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "green",
    marginBottom: 20,
    borderTopWidth: 5,
    paddingVertical: 15,
  },
  nowBoxText: {
    fontFamily: "Didot",
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginHorizontal: "10%",
  },
});
