import { themeColors } from "@/utils/theme-utils";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Define all routes and their params
type RootStackParamList = {
  Home: undefined;
  DetailsScreen: {
    name: string;
    phone: string;
    clothes: string;
    code: string;
    date: string;
    time: string;
    status: string;
  };
};

// Create a typed navigation prop for the Home screen
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clothes, setClothes] = useState("");

  const generateCode = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  };

  const handleAddToTrack = () => {
    if (!name || !phone || !clothes) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const record = {
      name,
      phone,
      clothes,
      code: generateCode(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      status: "Pending",
    };

    navigation.navigate("DetailsScreen", record);

    setName("");
    setPhone("");
    setClothes("");
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.blue }]}>
      <Text style={styles.homeText}>Home</Text>
      <Text style={styles.title}>Laundry Service</Text>

      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Clothes"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={clothes}
        onChangeText={setClothes}
      />

      <TouchableOpacity style={styles.addToTrackButton} onPress={handleAddToTrack}>
        <Text style={styles.addToTrackText}>Add to Track</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 50 },
  homeText: { fontSize: 20, fontWeight: "bold", color: themeColors.Grey, alignSelf: "flex-start", marginLeft: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFFFFF", marginVertical: 20 },
  input: { width: "85%", height: 50, backgroundColor: "#FFFFFF", borderRadius: 8, paddingHorizontal: 15, fontSize: 16, marginVertical: 8 },
  addToTrackButton: { width: "85%", height: 50, backgroundColor: themeColors.orange, borderRadius: 8, justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 20 },
  addToTrackText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
