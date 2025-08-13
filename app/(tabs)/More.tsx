import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function More() {
  const [isLightMode, setIsLightMode] = useState(false); // false = Dark Mode (default)

  // Theme colors
  const colors = {
    background: isLightMode ? "#E9E9E9" : "#000000",
    text: isLightMode ? "#000000" : "#FFFFFF",
    secondaryText: isLightMode ? "#555555" : "#CCCCCC",
    card: isLightMode ? "#F5F5F5" : "#1E1E1E",
    icon: isLightMode ? "#000000" : "#FFFFFF",
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.pageTitle, { color: colors.text }]}>More</Text>

      <TouchableOpacity style={[styles.reviewButton, { backgroundColor: colors.card }]}>
        <Text style={[styles.reviewText, { color: colors.text }]}>Review</Text>
        <Ionicons name="chevron-down" size={20} color={colors.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SimpleLineIcons name="share" size={24} color={colors.icon} />
          <Text style={[styles.shareText, { marginLeft: 6, color: colors.text }]}>
            Share the app
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.toggleRow}>
        <Text style={[styles.toggleLabel, { color: colors.text }]}>Dark mode</Text>
        <Switch
          value={isLightMode} // right = light, left = dark
          onValueChange={() => setIsLightMode((prev) => !prev)}
          trackColor={{ false: "#444", true: "#bbb" }}
          thumbColor="#fff"
        />
        <Text style={[styles.toggleLabel, { color: colors.text }]}>Light mode</Text>
      </View>
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
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  reviewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  reviewText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  shareText: {
    fontSize: 16,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  toggleLabel: {
    fontSize: 14,
  },
});
