import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function StatusButton({ label, backgroundColor, textColor }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 16
  }
});
