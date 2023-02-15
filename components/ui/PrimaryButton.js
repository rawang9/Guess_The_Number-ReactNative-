import { View, Text, Pressable, StyleSheet } from "react-native";
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outsideContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.insideContainer, styles.pressed]
            : styles.insideContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  outsideContainer: { margin: 4, borderRadius: 28, overflow: "hidden" },
  insideContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: { color: "white", textAlign: "center" },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
