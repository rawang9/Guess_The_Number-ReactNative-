import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number must be in between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    // console.log(chosenNumber);
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.NumInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsCoponent}>
        <View style={styles.buttonCoponent}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonCoponent}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsCoponent: {
    flexDirection: "row",
  },
  buttonCoponent: {
    flex: 1,
  },
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 8, //used in android
    // shadowColor: "black",//for IOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
  NumInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    textAlign: "center",
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    justifyContent: "center",
  },
});
export default StartGameScreen;
