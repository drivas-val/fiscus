import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BudgetSubmitScreen({ navigation, route }: any) {
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
    try {
      AsyncStorage.getItem("HomeInsurance").then((value) => {
        if (value != null) {
          setHomeInsurance(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Heat").then((value) => {
        if (value != null) {
          setHeat(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Water").then((value) => {
        if (value != null) {
          setWater(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Gas").then((value) => {
        if (value != null) {
          setGas(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Electricity").then((value) => {
        if (value != null) {
          setElectricity(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Internet").then((value) => {
        if (value != null) {
          setInternet(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("HousingOther").then((value) => {
        if (value != null) {
          setHousingOther(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Car").then((value) => {
        if (value != null) {
          setCar(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("CarGas").then((value) => {
        if (value != null) {
          setCarGas(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("CarInsurance").then((value) => {
        if (value != null) {
          setCarInsurance(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("CarMaintenance").then((value) => {
        if (value != null) {
          setCarMaintenance(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("TransportationOther").then((value) => {
        if (value != null) {
          setTransportationOther(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Food").then((value) => {
        if (value != null) {
          setFood(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Groceries").then((value) => {
        if (value != null) {
          setGroceries(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("FoodOther").then((value) => {
        if (value != null) {
          setFoodOther(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("EatOut").then((value) => {
        if (value != null) {
          setEatOut(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Clothing").then((value) => {
        if (value != null) {
          setClothing(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Phone").then((value) => {
        if (value != null) {
          setPhone(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("PhonePlan").then((value) => {
        if (value != null) {
          setPhonePlan(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Jewelry").then((value) => {
        if (value != null) {
          setJewelry(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("HairCut").then((value) => {
        if (value != null) {
          setHairCut(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("MedicalBill").then((value) => {
        if (value != null) {
          setMedicalBill(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("HealthInsurance").then((value) => {
        if (value != null) {
          setHealthInsurance(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Medications").then((value) => {
        if (value != null) {
          setMedications(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("MedicalOther").then((value) => {
        if (value != null) {
          setMedicalOther(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Gym").then((value) => {
        if (value != null) {
          setGym(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Gaming").then((value) => {
        if (value != null) {
          setGaming(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Music").then((value) => {
        if (value != null) {
          setMusic(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("VideoStream").then((value) => {
        if (value != null) {
          setvideoStream(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("OtherMonthly").then((value) => {
        if (value != null) {
          setOtherMonthly(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Hobbies").then((value) => {
        if (value != null) {
          setHobbies(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("GoingOut").then((value) => {
        if (value != null) {
          setGoingOut(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("LifeInsurance").then((value) => {
        if (value != null) {
          setLifeInsurance(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Loans").then((value) => {
        if (value != null) {
          setLoans(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("PersonalDebt").then((value) => {
        if (value != null) {
          setPersonalDebt(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("ChildCare").then((value) => {
        if (value != null) {
          setChildCare(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("PetCare").then((value) => {
        if (value != null) {
          setPetCare(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Retirement").then((value) => {
        if (value != null) {
          setRetirement(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("Savings").then((value) => {
        if (value != null) {
          setSavings(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
    try {
      AsyncStorage.getItem("ExtraneousOther").then((value) => {
        if (value != null) {
          setExtraneousOther(parseInt(value));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("Rent");
      await AsyncStorage.removeItem("HomeInsurance");
      await AsyncStorage.removeItem("Heat");
      await AsyncStorage.removeItem("Water");
      await AsyncStorage.removeItem("Gas");
      await AsyncStorage.removeItem("Electricity");
      await AsyncStorage.removeItem("Internet");
      await AsyncStorage.removeItem("HousingOther");
      await AsyncStorage.removeItem("Car");
      await AsyncStorage.removeItem("CarGas");
      await AsyncStorage.removeItem("CarInsurance");
      await AsyncStorage.removeItem("CarMaintenance");
      await AsyncStorage.removeItem("TransportationOther");
      await AsyncStorage.removeItem("Food");
      await AsyncStorage.removeItem("Groceries");
      await AsyncStorage.removeItem("EatOut");
      await AsyncStorage.removeItem("Clothing");
      await AsyncStorage.removeItem("Phone");
      await AsyncStorage.removeItem("PhonePlan");
      await AsyncStorage.removeItem("Jewelry");
      await AsyncStorage.removeItem("HairCut");
      await AsyncStorage.removeItem("MedicalBill");
      await AsyncStorage.removeItem("HealthInsurance");
      await AsyncStorage.removeItem("Medications");
      await AsyncStorage.removeItem("MedicalOther");
      await AsyncStorage.removeItem("Gym");
      await AsyncStorage.removeItem("Gaming");
      await AsyncStorage.removeItem("FoodOther");
      await AsyncStorage.removeItem("Music");
      await AsyncStorage.removeItem("VideoStream");
      await AsyncStorage.removeItem("OtherMonthly");
      await AsyncStorage.removeItem("Hobbies");
      await AsyncStorage.removeItem("GoingOut");
      await AsyncStorage.removeItem("LifeInsurance");
      await AsyncStorage.removeItem("Loans");
      await AsyncStorage.removeItem("PersonalDebt");
      await AsyncStorage.removeItem("ChildCare");
      await AsyncStorage.removeItem("PetCare");
      await AsyncStorage.removeItem("Retirement");
      await AsyncStorage.removeItem("Savings");
      await AsyncStorage.removeItem("ExtraneousOther");
      navigation.navigate("BudgetScreen");
    } catch {
      console.log("error");
    }
  };

  const HousingAndUtilities =
    rent +
    homeInsurance +
    heat +
    water +
    gas +
    electricity +
    internet +
    housingOther;

  const Transportation =
    car + gas + carInsurance + carMaintenance + transportationOther + carGas;

  const Groceries = food + groceries + eatOut + foodOther;

  const Personal =
    clothing + phone + phonePlan + hairCut + jewelry + hobbies + goingOut;

  const Medical = medicalBill + healthInsurance + medications + medicalOther;

  const Subscriptions = gym + gaming + videoStream + music + otherMonthly;

  const Extraneous =
    lifeInsurance +
    loans +
    personalDebt +
    childCare +
    petCare +
    retirement +
    savings +
    extraneousOther;

  const Total =
    HousingAndUtilities +
    Transportation +
    Groceries +
    Medical +
    Personal +
    Subscriptions +
    Extraneous;

  var budgetDict = {
    "Housing and Utilities": HousingAndUtilities,
    Transportation: Transportation,
    Grocerires: Groceries,
    Personal: Personal,
    Medical: Medical,
    Subcriptions: Subscriptions,
    Extraneous: Extraneous,
  };

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
        <View>
          <Text style={styles.header}>Statistics </Text>
          <Text style={styles.subText}>
            {/* DO housing and Utilities + Transporation... etc */}
            Total Expenditures - ${Total}
          </Text>
          <Text style={styles.subText}>
            Highest Expenditure - {Extraneous} -{" "}
            {Math.round((Extraneous / Total) * 100)}%
          </Text>
          <Text style={styles.subText}>
            Housing and Utilities - {HousingAndUtilities} -{" "}
            {Math.round((HousingAndUtilities / Total) * 100)}%
          </Text>
          <Text style={styles.subText}>
            Transportation - {Transportation} -{" "}
            {Math.round((Transportation / Total) * 100)}%
          </Text>
          <Text style={styles.subText}>
            Food / Groceries - {Groceries} -{" "}
            {Math.round((Groceries / Total) * 100)}%
          </Text>
          <Text style={styles.subText}>
            Personal - {Personal} - {Math.round((Personal / Total) * 100)}%
          </Text>
          <Text style={styles.subText}>
            Medical - {Medical} - {Math.round((Medical / Total) * 100)}%
          </Text>
          <Text style={styles.subText}>
            Monthly Subscriptions - {Subscriptions} -{" "}
            {Math.round((Subscriptions / Total) * 100)}%
          </Text>
          <Text style={styles.subText}>
            Extraneous - {Extraneous} - {Math.round((Extraneous / Total) * 100)}
            %
          </Text>
          <TouchableOpacity onPress={removeData}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Restart</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "black",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    textAlign: "center",
  },
  header: {
    fontFamily: "Cochin",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textDecorationLine: "underline",
    paddingBottom: 10,
  },
  subText: {
    fontSize: 17,
    color: "black",
    fontWeight: "300",
  },
});
