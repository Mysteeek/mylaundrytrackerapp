import { useTheme } from "@/utils/theme-context";
import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function More() {
  const { isLightMode, toggleTheme, colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Title */}
      <Text style={[styles.pageTitle, { color: colors.text }]}>More Options</Text>

      {/* Review Section */}
      <TouchableOpacity style={[styles.reviewButton, { backgroundColor: colors.card }]}>
        <Text style={[styles.reviewText, { color: colors.text }]}>Review</Text>
        <Ionicons name="chevron-down" size={20} color={colors.icon} />
      </TouchableOpacity>

      {/* Share App */}
      <TouchableOpacity style={styles.shareRow}>
        <SimpleLineIcons name="share" size={24} color={colors.icon} />
        <Text style={[styles.shareText, { color: colors.text }]}>Share the app</Text>
      </TouchableOpacity>

      {/* Theme Toggle */}
      <View style={styles.toggleRow}>
        <Text style={[styles.toggleLabel, { color: colors.text }]}>Dark mode</Text>
        <Switch
          value={isLightMode}
          onValueChange={toggleTheme}
          trackColor={{ false: "#888", true: "#ccc" }}
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
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center", // Center the title
    marginBottom: 30,
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
    marginLeft: 6,
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
