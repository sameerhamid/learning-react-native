import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
const generateRandomBetween = (min, max, exclude) => {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};
const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <PrimaryButton>+</PrimaryButton>
        <PrimaryButton>-</PrimaryButton>
      </View>
      <View>{/* Log rounds */}</View>
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
