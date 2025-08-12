import { themeColors } from "@/utils/theme-utils";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: themeColors.blue }]}>
      {/* Top Title */}
      <Text style={styles.homeText}>Home</Text>
      <Text style={styles.title}>Laundry Service</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Customer Name" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#999" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Number of Clothes" placeholderTextColor="#999" keyboardType="numeric" />

      {/* Add to Track Button */}
      <TouchableOpacity style={styles.addToTrackButton}>
        <Text style={styles.addToTrackText}>Add to Track</Text>
      </TouchableOpacity>

      {/* Status Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.statusButton, { backgroundColor: "#7ED321" }]}>
          <Text style={styles.buttonText}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusButton, { backgroundColor: "#F9E051" }]}>
          <Text style={styles.buttonText}>Process</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusButton, { backgroundColor: "#D8D8D8" }]}>
          <Text style={styles.buttonText}>Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  homeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: themeColors.Grey,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginVertical: 20,
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 8,
  },
  addToTrackButton: {
    width: "85%",
    height: 50,
    backgroundColor: themeColors.orange,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  addToTrackText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  statusButton: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
});