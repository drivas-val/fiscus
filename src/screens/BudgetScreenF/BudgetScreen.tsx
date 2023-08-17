import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Color } from "../../constants/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

export default function BudgetScreen({ navigation }: any) {
  const [rent, setRent] = React.useState(0);
  const [homeInsurance, setHomeInsurance] = React.useState(0);
  const [heat, setHeat] = React.useState(0);
  const [water, setWater] = React.useState(0);
  const [gas, setGas] = React.useState(0);
  const [electricity, setElectricity] = React.useState(0);
  const [internet, setInternet] = React.useState(0);
  const [housingOther, setHousingOther] = React.useState(0);
  const [car, setCar] = React.useState(0);
  const [carGas, setCarGas] = React.useState(0);
  const [carInsurance, setCarInsurance] = React.useState(0);
  const [carMaintenance, setCarMaintenance] = React.useState(0);
  const [transportationOther, setTransportationOther] = React.useState(0);
  const [food, setFood] = React.useState(0);
  const [groceries, setGroceries] = React.useState(0);
  const [eatOut, setEatOut] = React.useState(0);
  const [foodOther, setFoodOther] = React.useState(0);
  const [clothing, setClothing] = React.useState(0);
  const [phone, setPhone] = React.useState(0);
  const [phonePlan, setPhonePlan] = React.useState(0);
  const [jewelry, setJewelry] = React.useState(0);
  const [hairCut, setHairCut] = React.useState(0);
  const [personalOther, setPersonalOther] = React.useState(0);
  const [medicalBill, setMedicalBill] = React.useState(0);
  const [healthInsurance, setHealthInsurance] = React.useState(0);
  const [medications, setMedications] = React.useState(0);
  const [medicalOther, setMedicalOther] = React.useState(0);
  const [gym, setGym] = React.useState(0);
  const [gaming, setGaming] = React.useState(0);
  const [music, setMusic] = React.useState(0);
  const [videoStream, setvideoStream] = React.useState(0);
  const [otherMonthly, setOtherMonthly] = React.useState(0);
  const [hobbies, setHobbies] = React.useState(0);
  const [goingOut, setGoingOut] = React.useState(0);
  const [lifeInsurance, setLifeInsurance] = React.useState(0);
  const [loans, setLoans] = React.useState(0);
  const [personalDebt, setPersonalDebt] = React.useState(0);
  const [childCare, setChildCare] = React.useState(0);
  const [petCare, setPetCare] = React.useState(0);
  const [retirement, setRetirement] = React.useState(0);
  const [savings, setSavings] = React.useState(0);
  const [extraneousOther, setExtraneousOther] = React.useState(0);
  const zero = 0;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("Rent").then((value) => {
        if (value != null) {
          navigation.navigate("BudgetSubmitScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (isNaN(rent)) {
      await AsyncStorage.setItem("Rent", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("Rent", rent.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    if (isNaN(homeInsurance)) {
      await AsyncStorage.setItem("HomeInsurance", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("HomeInsurance", homeInsurance.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    if (isNaN(heat)) {
      await AsyncStorage.setItem("Heat", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("Heat", heat.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    if (isNaN(water)) {
      await AsyncStorage.setItem("Water", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("Water", water.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    if (isNaN(gas)) {
      await AsyncStorage.setItem("Gas", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("Gas", gas.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    if (isNaN(electricity)) {
      await AsyncStorage.setItem("Electricity", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("Electricity", electricity.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    if (isNaN(internet)) {
      await AsyncStorage.setItem("Internet", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("Internet", internet.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
    if (isNaN(housingOther)) {
      await AsyncStorage.setItem("HousingOther", zero.toString());
      navigation.navigate("BudgetSubmitScreen");
    } else {
      try {
        await AsyncStorage.setItem("HousingOther", housingOther.toString());
        navigation.navigate("BudgetSubmitScreen");
      } catch (error) {
        console.log(error);
      }
    }
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
        <Text style={styles.title}>Housing / Utilities</Text>
        <Text
          style={{
            height: 2,
            width: 200,
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <View style={styles.row}>
          <Image
            source={require("../../../assets/rent.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Rent </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            defaultValue="0"
            onChangeText={(val) => setRent(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/homeInsurance.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Home Ins. </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setHomeInsurance(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/heat.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Heat </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setHeat(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/water.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Water </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setWater(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/gas.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Gas </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setGas(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/electricity.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Electricity </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setElectricity(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/wifi.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Internet </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setInternet(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/other.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Other </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setHousingOther(parseInt(val))}
          />
        </View>
        <Text style={styles.title}>Transportation</Text>
        <Text
          style={{
            height: 2,
            width: 200,
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <View style={styles.row}>
          <Image
            source={require("../../../assets/carPayment.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Car </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setCar(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/carGas.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Fuel </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setCarGas(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/carInsurance.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Car Ins. </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setCarInsurance(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/carMaintenance.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Maintenance </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setCarMaintenance(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/other.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Other </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setTransportationOther(parseInt(val))}
          />
        </View>
        <Text style={styles.title}>Food / Gorceries</Text>
        <Text
          style={{
            height: 2,
            width: 200,
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <View style={styles.row}>
          <Image
            source={require("../../../assets/food.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Food </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setFood(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/groceries.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Groceries </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setGroceries(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/eatOut.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Eat Out </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setEatOut(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/other.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Other </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setFoodOther(parseInt(val))}
          />
        </View>
        <Text style={styles.title}>Personal</Text>
        <Text
          style={{
            height: 2,
            width: 200,
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <View style={styles.row}>
          <Image
            source={require("../../../assets/clothing.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Clothing </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setClothing(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/phone.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Phone </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setPhone(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/phonePlan.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Phone Plan </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setPhonePlan(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/haircut.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Stylist </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setHairCut(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/jewelry.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Jewelry </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setJewelry(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/hobby.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Hobbies </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setHobbies(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/goingOut.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Going Out </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setGoingOut(parseInt(val))}
          />
        </View>
        <Text style={styles.title}>Medical</Text>
        <Text
          style={{
            height: 2,
            width: 200,
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <View style={styles.row}>
          <Image
            source={require("../../../assets/medicalBill.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Medical Bills </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setMedicalBill(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/healthInsurance.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Health Ins. </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setHealthInsurance(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/medications.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Medications </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setMedications(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/other.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Other </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setMedicalOther(parseInt(val))}
          />
        </View>
        <Text style={styles.title}>Monthly Subcriptions</Text>
        <Text
          style={{
            height: 2,
            width: 200,
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <View style={styles.row}>
          <Image
            source={require("../../../assets/gym.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Gym </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setGym(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/game.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Gaming </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setGaming(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/videoStreaming.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Video Streaming </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setvideoStream(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/music.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Music</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setMusic(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/other.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}> Other </Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setOtherMonthly(parseInt(val))}
          />
        </View>
        <Text style={styles.title}>Extraneous</Text>
        <Text
          style={{
            height: 2,
            width: 200,
            backgroundColor: "black",
            margin: 5,
          }}
        />
        <View style={styles.row}>
          <Image
            source={require("../../../assets/lifeInsurance.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Life Insurance</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setLifeInsurance(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/loan.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Loans</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setLoans(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/debt.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Personal Debt</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setPersonalDebt(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/childCare.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Child Care</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setChildCare(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/petCare.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Pet Care</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setPetCare(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/retirement.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Retirement</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setRetirement(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/savings.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Savings</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setSavings(parseInt(val))}
          />
        </View>
        <View style={styles.row}>
          <Image
            source={require("../../../assets/other.png")}
            resizeMode="contain"
            style={styles.eye}
          />
          <Text style={styles.genText}>Other</Text>
          <TextInput
            style={styles.textBox}
            placeholder="$"
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(val) => setExtraneousOther(parseInt(val))}
          />
        </View>
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
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cochin",
    fontSize: 30,
    fontWeight: "bold",
    color: Color.darkGreen,
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  eye: {
    width: 30,
    height: 30,
  },
  textBox: {
    borderWidth: 2,
    borderColor: "black",
    padding: 5,
    margin: 0,
    width: 100,
    marginBottom: 45,
    borderRadius: 20,
    marginLeft: 10,
  },
  genText: {
    fontSize: 25,
    fontFamily: "Cochin",
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
