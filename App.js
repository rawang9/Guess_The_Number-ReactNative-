import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./Screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickedNuberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNuberHandler} />;
  if (userNumber) {
    screen = <GameScreen initialGuess={userNumber} />;
  }
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f", "transparent"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/image/bg.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroungImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
  backgroungImage: {
    opacity: 0.15,
  },
});
