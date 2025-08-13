import { useTheme } from "@/utils/theme-context";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type TrackingStatus = "Received" | "Process" | "Completed" | null;

const trackingData: Record<string, TrackingStatus> = {
  "12345678": "Received",
  "87654321": "Process",
  "11223344": "Completed",
};

export default function Track() {
  const { colors } = useTheme();
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [status, setStatus] = useState<TrackingStatus>(null);

  const handleSearch = () => {
    if (!/^\d{8}$/.test(trackingNumber)) {
      Alert.alert("Invalid Input", "Tracking number must be exactly 8 digits.");
      setStatus(null);
      return;
    }

    const foundStatus = trackingData[trackingNumber.trim()];
    if (foundStatus) {
      setStatus(foundStatus);
    } else {
      Alert.alert("Not Found", "Tracking number not found.");
      setStatus(null);
    }
  };

  const getButtonColor = (buttonStatus: TrackingStatus) =>
    status === buttonStatus ? "#FFA500" : colors.card;

  const getTextStyle = (buttonStatus: TrackingStatus) =>
    status === buttonStatus
      ? styles.buttonTextLight
      : [styles.buttonTextDark, { color: colors.text }];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.pageTitle, { color: colors.text }]}>Track</Text>

      <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
        <Ionicons
          name="search"
          size={20}
          color={colors.secondaryText}
          style={{ marginHorizontal: 8 }}
        />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Enter 8-digit tracking number"
          placeholderTextColor={colors.secondaryText}
          value={trackingNumber}
          onChangeText={setTrackingNumber}
          keyboardType="numeric"
          maxLength={8}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonTextLight}>Track Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {["Received", "Process", "Completed"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, { backgroundColor: getButtonColor(item as TrackingStatus) }]}
          >
            <Text style={getTextStyle(item as TrackingStatus)}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {status && (
        <Text style={[styles.statusMessage]}>
          Your order status is: {status}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, alignItems: "center" },
  pageTitle: { fontSize: 24, fontWeight: "bold", alignSelf: "flex-start", marginBottom: 20 },
  searchContainer: { flexDirection: "row", alignItems: "center", borderRadius: 8, overflow: "hidden", width: "100%", height: 50, marginBottom: 20 },
  searchInput: { flex: 1, height: "100%", fontSize: 16 },
  searchButton: { backgroundColor: "#173B55", height: "100%", justifyContent: "center", alignItems: "center", paddingHorizontal: 12 },
  button: { flex: 1, height: 50, borderRadius: 8, justifyContent: "center", alignItems: "center", marginHorizontal: 5 },
  buttonTextLight: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  buttonTextDark: { fontWeight: "bold", fontSize: 16 },
  row: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  statusMessage: { marginTop: 15, fontSize: 16, fontWeight: "bold", color: "#FFA500" },
});
