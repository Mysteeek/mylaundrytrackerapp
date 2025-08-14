import { useTheme } from "@/utils/theme-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { colors, isLightMode } = useTheme();
  const textColor = isLightMode ? "#000000" : "#808080";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clothes, setClothes] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  // Generate 3-digit alphanumeric for internal updates
  const generateInternalCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  // Generate 8-digit numeric tracking code for customer
  const generateTrackingCode = () =>
    Math.floor(10000000 + Math.random() * 90000000).toString();

  const handleAddToTrack = async () => {
    if (!name || !phone || !clothes || !amount) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const internalCode = generateInternalCode();
    const trackingCode = generateTrackingCode();
    const now = new Date();

    const newOrder = {
      name,
      phone,
      clothes,
      amount,
      currency,
      internalCode,
      trackingCode,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      status: "Received",
    };

    // Save to AsyncStorage
    const stored = await AsyncStorage.getItem("laundryHistory");
    const history = stored ? JSON.parse(stored) : [];
    const updatedHistory = [newOrder, ...history];
    await AsyncStorage.setItem("laundryHistory", JSON.stringify(updatedHistory));

    // Reset form
    setName("");
    setPhone("");
    setClothes("");
    setAmount("");
    setCurrency("USD");

    Alert.alert(
      "Order Created",
      `Internal Code: ${internalCode}\nTracking Code: ${trackingCode}\n\nGive customer the tracking code to check status.`
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.homeText, { color: textColor }]}>Home</Text>
      <Text style={[styles.title, { color: textColor }]}>Laundry Service</Text>

      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: textColor }]}
        placeholder="Customer Name"
        placeholderTextColor={textColor}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: textColor }]}
        placeholder="Phone Number"
        placeholderTextColor={textColor}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: textColor }]}
        placeholder="Number of Clothes"
        placeholderTextColor={textColor}
        keyboardType="numeric"
        value={clothes}
        onChangeText={setClothes}
      />

      {/* Amount + Currency Row */}
      <View style={styles.amountRow}>
        <TextInput
          style={[styles.amountInput, { backgroundColor: colors.card, color: textColor }]}
          placeholder="Amount"
          placeholderTextColor={textColor}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <View style={[styles.currencyPicker, { backgroundColor: colors.card }]}>
          <Picker
            selectedValue={currency}
            style={{ color: textColor }}
            onValueChange={(value) => setCurrency(value)}
            dropdownIconColor={textColor}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="GBP" />
            <Picker.Item label="NGN" value="NGN" />
            <Picker.Item label="JPY" value="JPY" />
            <Picker.Item label="AUD" value="AUD" />
            <Picker.Item label="CAD" value="CAD" />
            <Picker.Item label="CNY" value="CNY" />
            <Picker.Item label="HKD" value="HKD" />
            <Picker.Item label="NZD" value="NZD" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.addToTrackButton, { backgroundColor: "#FFA500" }]}
        onPress={handleAddToTrack}
      >
        <Text style={styles.addToTrackText}>Add to Track</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 50 },
  homeText: { fontSize: 20, fontWeight: "bold", alignSelf: "flex-start", marginLeft: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 20 },
  input: { width: "85%", height: 50, borderRadius: 8, paddingHorizontal: 15, fontSize: 16, marginVertical: 8 },
  amountRow: { flexDirection: "row", width: "85%", marginVertical: 8 },
  amountInput: { flex: 2, height: 50, borderRadius: 8, paddingHorizontal: 15, fontSize: 16 },
  currencyPicker: { flex: 1, height: 50, borderRadius: 8, marginLeft: 8, justifyContent: "center" },
  addToTrackButton: { width: "85%", height: 50, borderRadius: 8, justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 20 },
  addToTrackText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
