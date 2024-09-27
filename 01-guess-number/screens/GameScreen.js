import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>

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
