import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#710b2f", "#ddb52f"]}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={styles.container}
        imageStyle={styles.bgImg}
      >
        <StartGameScreen />
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
