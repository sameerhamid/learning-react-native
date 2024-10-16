import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';

interface IconButtonTypes {
  icon: string;
  color: string;
  size: number;
  onPress: () => void;
}
function IconButton({icon, color, size, onPress}: IconButtonTypes) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* <Ionicons name={icon} color={color} size={size} /> */}
    </TouchableOpacity>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
});
