import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    marginTop: 22,
    borderWidth: 1,
    borderColor: "#ddb52f",
    padding: 10,
  },
});
