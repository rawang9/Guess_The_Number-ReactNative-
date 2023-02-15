import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    borderRadius: "100%",
    margin: 24,
    padding: 4,
    marginHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 36,
  },
});
