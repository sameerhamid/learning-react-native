import {
  Image,
  ImageProps,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface IconButtonTypes {
  color: string;
  size: number;
  onPress: () => void;
  imageSrc: ImageSourcePropType;
}
function IconButton({imageSrc, color, size, onPress}: IconButtonTypes) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={imageSrc}
        style={[styles.image, {tintColor: color, height: size, width: size}]}
      />
    </TouchableOpacity>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  image: {},
});
