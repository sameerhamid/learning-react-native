import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [gameIsOver, setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary600, Colors.accent500]}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={styles.container}
        imageStyle={styles.bgImg}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
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
