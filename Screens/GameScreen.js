import { useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
function generateRandomBetween(min, max, exclude) {
  let radNum = Math.floor(Math.random() * max - min) + min;
  if (radNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return radNum;
  }
}
const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  //   console.log("game screen ", currentGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
export default GameScreen;
