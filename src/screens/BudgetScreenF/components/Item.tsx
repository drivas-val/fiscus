import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import PropTypes from "prop-types";

type ItemProps = {
  text: string;
  imageName: string;
};

export default function Item(props: ItemProps) {
  return (
    <View style={styles.row}>
      <Image
        source={require(props.imageName)}
        resizeMode="contain"
        style={styles.eye}
      />
      <Text style={styles.genText}> {props.text} </Text>
      <TextInput
        style={styles.textBox}
        placeholder="$"
        keyboardType="numeric"
        returnKeyType="done"
        onChangeText={(val) => val}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
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
    fontSize: 30,
    fontFamily: "Cochin",
  },
});
