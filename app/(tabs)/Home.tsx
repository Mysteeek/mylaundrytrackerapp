import { useTheme } from "@/utils/theme-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { colors } = useTheme();

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
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.homeText, { color: colors.secondaryText }]}>Home</Text>
      <Text style={[styles.title, { color: colors.text }]}>Laundry Service</Text>

      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Customer Name"
        placeholderTextColor={colors.secondaryText}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Phone Number"
        placeholderTextColor={colors.secondaryText}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Number of Clothes"
        placeholderTextColor={colors.secondaryText}
        keyboardType="numeric"
        value={clothes}
        onChangeText={setClothes}
      />

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
  addToTrackButton: { width: "85%", height: 50, borderRadius: 8, justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 20 },
  addToTrackText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
