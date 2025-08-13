import { themeColors } from "@/utils/theme-utils";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type TrackingStatus = "Received" | "Process" | "Completed" | null;

const trackingData: Record<string, "Received" | "Process" | "Completed"> = {
  "12345678": "Received",
  "87654321": "Process",
  "11223344": "Completed",
};

export default function Track() {
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

  const getButtonColor = (buttonStatus: "Received" | "Process" | "Completed") => {
    return status === buttonStatus ? "#FFA500" : "#E9E9E9"; // Orange for active, grey for inactive
  };

  const getTextStyle = (buttonStatus: "Received" | "Process" | "Completed") => {
    return status === buttonStatus ? styles.buttonTextLight : styles.buttonTextDark;
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.blue }]}>
      <Text style={styles.pageTitle}>Track</Text>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={{ marginHorizontal: 8 }}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Enter 8-digit tracking number"
          placeholderTextColor="#999"
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
        <TouchableOpacity
          style={[styles.button, { backgroundColor: getButtonColor("Received") }]}
        >
          <Text style={getTextStyle("Received")}>Received</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: getButtonColor("Process") }]}
        >
          <Text style={getTextStyle("Process")}>Process</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: getButtonColor("Completed") }]}
        >
          <Text style={getTextStyle("Completed")}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Status message under buttons */}
      {status && (
        <Text style={styles.statusMessage}>
          Your order status is: {status}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: themeColors.Grey,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#000",
  },
  searchButton: {
    backgroundColor: "#173B55",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonTextLight: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonTextDark: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  statusMessage: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFA500", // Orange text
  },
});