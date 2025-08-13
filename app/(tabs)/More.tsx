import { useTheme } from "@/utils/theme-context";
import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function More() {
  const { isLightMode, toggleTheme, colors } = useTheme();

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
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, alignItems: "center" },
  pageTitle: { fontSize: 24, fontWeight: "bold", alignSelf: "flex-start", marginBottom: 20 },
  reviewButton: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: 50, borderRadius: 8, paddingHorizontal: 20, marginBottom: 15 },
  reviewText: { fontSize: 16, fontWeight: "bold" },
  shareRow: { flexDirection: "row", alignItems: "center", marginBottom: 20, width: "100%" },
  shareText: { fontSize: 16 },
  toggleRow: { flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginTop: 20 },
  toggleLabel: { fontSize: 14 },
});
