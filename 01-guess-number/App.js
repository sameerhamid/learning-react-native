import { ImageBackground, StyleSheet, View } from "react-native";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  return (
    <LinearGradient style={styles.container} colors={["#710b2f", "#ddb52f"]}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={styles.container}
        imageStyle={styles.bgImg}
      >
        {!userNumber && <StartGameScreen onPickNumber={pickedNumberHandler} />}
        {userNumber && <GameScreen />}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    opacity: 0.15,
  },
});
