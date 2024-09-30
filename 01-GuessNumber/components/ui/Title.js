import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 22,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
  },
});
