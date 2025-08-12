import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen({ route }) {
  const { name, phone, clothes, code, date, time, status } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Clothes: {clothes}</Text>
      <Text>Code: {code}</Text>
      <Text>Date: {date}</Text>
      <Text>Time: {time}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
