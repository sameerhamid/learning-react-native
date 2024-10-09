import {
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
interface IconButtonType {
  image: ImageRequireSource;
  color: string;
  size: number;
  onPress: () => void;
}
const IconButton = ({ image, color, size, onPress }: IconButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={image}
        style={{ tintColor: color, width: size, height: size }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginRight: 10,
  },
});
