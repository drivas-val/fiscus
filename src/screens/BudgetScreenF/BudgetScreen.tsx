import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function BudgetScreen() {
  return (
    <SafeAreaView>
      <Text>Budget</Text>
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