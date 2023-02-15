import { Text, StyleSheet } from "react-native";
export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    fontWeight: "bold",
  },
});
