import { useTheme } from "@/utils/theme-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

export default function home() {
  const { colors, isLightMode } = useTheme();
  const textColor = isLightMode ? "#000000" : "#808080";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clothes, setClothes] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const generateInternalCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

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

    const stored = await AsyncStorage.getItem("laundryHistory");
    const history = stored ? JSON.parse(stored) : [];
    const updatedHistory = [newOrder, ...history];
    await AsyncStorage.setItem("laundryHistory", JSON.stringify(updatedHistory));

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
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={[styles.headerTitle, { color: "white" }]}>Customer Details</Text>

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
            {["NGN", "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "HKD", "NZD"].map((cur) => (
              <Picker.Item key={cur} label={cur} value={cur} />
            ))}
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.addToTrackButton, { backgroundColor: "#FF8040" }]}
        onPress={handleAddToTrack}
      >
        <Text style={styles.addToTrackText}>Add to Track</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    alignItems: "center", 
    paddingTop: 40, 
    paddingBottom: 20,
    paddingHorizontal: width * 0.05
  },
  headerTitle: { 
    fontSize: width * 0.065, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
  },
  input: { 
    width: "100%", 
    minHeight: 50, 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    fontSize: width * 0.04, 
    marginVertical: 8 
  },
  amountRow: { 
    flexDirection: "row", 
    width: "100%", 
    marginVertical: 8 
  },
  amountInput: { 
    flex: 2, 
    minHeight: 50, 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    fontSize: width * 0.04 
  },
  currencyPicker: { 
    flex: 1, 
    minHeight: 50, 
    borderRadius: 8, 
    marginLeft: 8, 
    justifyContent: "center" 
  },
  addToTrackButton: { 
    width: "100%", 
    minHeight: 50, 
    borderRadius: 8, 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 15 
  },
  addToTrackText: { 
    color: "#FFF", 
    fontSize: width * 0.04, 
    fontWeight: "bold" 
  },
});
