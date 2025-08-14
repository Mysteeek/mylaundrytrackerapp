import { useTheme } from "@/utils/theme-context";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LaundryStatusScreen() {
  const { colors } = useTheme();

  const [codeInput, setCodeInput] = useState("");
  const [history, setHistory] = useState([
    {
      name: "John Doe",
      phone: "08012345678",
      clothes: "5",
      code: "12345678",
      date: "13/08/2025",
      time: "21:41:14",
      status: "Received",
    },
  ]);

  const updateStatus = () => {
    const updated = history.map((item) =>
      item.code === codeInput
        ? {
            ...item,
            status:
              item.status === "Received"
                ? "Processing"
                : item.status === "Processing"
                ? "Completed"
                : "Completed",
          }
        : item
    );
    setHistory(updated);
    setCodeInput("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Received":
        return "#ff7f11"; // Orange
      case "Processing":
        return "#1e3a8a"; // Dark blue
      case "Completed":
        return "#4b5563"; // Gray
      default:
        return "#000";
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Page Title */}
      <Text style={[styles.title, { color: colors.text }]}>Laundry Status Manager</Text>

      {/* Code Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          placeholder="Enter 8-digit code"
          placeholderTextColor="#9ca3af"
          value={codeInput}
          onChangeText={setCodeInput}
          keyboardType="numeric"
          maxLength={8}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#ff7f11" }]}
          onPress={updateStatus}
        >
          <Text style={[styles.buttonText, { color: "#000" }]}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* History List */}
      <FlatList
        data={history}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={[styles.historyCard, { backgroundColor: colors.card }]}>
            <View style={styles.row}>
              <Text style={[styles.historyText, { color: colors.text }]}>Code: {item.code}</Text>
              <Text style={[styles.status, { color: getStatusColor(item.status) }]}>{item.status}</Text>
            </View>
            <Text style={[styles.historyText, { color: colors.text }]}>{item.date} {item.time}</Text>
            <Text style={[styles.historyText, { color: colors.text }]}>{item.name} | {item.phone}</Text>
            <Text style={[styles.historyText, { color: colors.text }]}>Clothes: {item.clothes}</Text>
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