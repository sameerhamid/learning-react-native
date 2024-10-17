import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface IconButtonPropTypes {
  imageSrc: ImageSourcePropType;
  onPress?: () => void;
  size?: number;
  color?: string;
}
const IconButton = ({imageSrc, onPress, size, color}: IconButtonPropTypes) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={imageSrc}
        style={[styles.image, {width: size, height: size, tintColor: color}]}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  image: {},
});
