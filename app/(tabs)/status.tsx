import { useTheme } from "@/utils/theme-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LaundryStatusScreen() {
  const { colors } = useTheme();
  const [codeInput, setCodeInput] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  const loadHistory = async () => {
    const stored = await AsyncStorage.getItem("laundryHistory");
    if (stored) setHistory(JSON.parse(stored));
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const updateStatus = async () => {
    if (!codeInput) {
      Alert.alert("Error", "Please enter the internal code");
      return;
    }

    let found = false;
    const updated = history.map((item) => {
      if (item.internalCode?.toUpperCase() === codeInput.trim().toUpperCase()) {
        found = true;
        let newStatus =
          item.status === "Received"
            ? "Processing"
            : item.status === "Processing"
            ? "Completed"
            : "Completed";
        return { ...item, status: newStatus };
      }
      return item;
    });

    if (!found) {
      Alert.alert("Not Found", "No matching order for this internal code.");
      return;
    }

    setHistory(updated);
    await AsyncStorage.setItem("laundryHistory", JSON.stringify(updated));
    setCodeInput("");
    Alert.alert("Success", "Order status updated.");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Received":
        return "#FF8040";
      case "Processing":
        return "#1e3a8a";
      case "Completed":
        return "#4b5563";
      default:
        return "#000";
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Laundry Status Manager</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          placeholder="Enter Internal Code Only"
          placeholderTextColor="#9ca3af"
          value={codeInput}
          onChangeText={setCodeInput}
          autoCapitalize="characters"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#FF8040" }]}
          onPress={updateStatus}
        >
          <Text style={[styles.buttonText, { color: "#000" }]}>Update</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={history}
        keyExtractor={(item) => item.trackingCode}
        renderItem={({ item }) => (
          <View style={[styles.historyCard, { backgroundColor: colors.card }]}>
            <View style={styles.row}>
              <Text style={[styles.historyText, { color: colors.text }]}>
                Internal: {item.internalCode} | Tracking: {item.trackingCode}
              </Text>
              <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
                {item.status}
              </Text>
            </View>
            <Text style={[styles.historyText, { color: colors.text }]}>
              {item.date} {item.time}
            </Text>
            <Text style={[styles.historyText, { color: colors.text }]}>
              {item.name} | {item.phone}
            </Text>
            <Text style={[styles.historyText, { color: colors.text }]}>
              Clothes: {item.clothes}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  inputRow: { flexDirection: "row", marginBottom: 16, width: "100%" },
  input: { flex: 1, padding: 10, borderRadius: 8, marginRight: 8 },
  button: { paddingHorizontal: 16, justifyContent: "center", borderRadius: 8 },
  buttonText: { fontWeight: "bold" },
  historyCard: { padding: 12, borderRadius: 8, marginBottom: 10, width: "100%" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  historyText: { fontSize: 14 },
  status: { fontWeight: "bold" },
});