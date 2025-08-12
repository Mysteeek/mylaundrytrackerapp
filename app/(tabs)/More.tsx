import { themeColors } from "@/utils/theme-utils";
import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function More() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.blue }]}>
      <Text style={styles.pageTitle}>More</Text>

      <TouchableOpacity style={styles.reviewButton}>
        <Text style={styles.reviewText}>Review</Text>
        <Ionicons name="chevron-down" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SimpleLineIcons name="share" size={24} color="white" />
          <Text style={[styles.shareText, { marginLeft: 6 }]}>Share the app</Text>
        </View>
      </TouchableOpacity>


      <View style={styles.toggleRow}>
        <Text style={styles.toggleLabel}>Dark mode</Text>
        <Switch
          value={isLightMode}
          onValueChange={setIsLightMode}
          trackColor={{ false: "#ccc", true: "#1E88E5" }}
          thumbColor="#fff"
        />
        <Text style={styles.toggleLabel}>Light mode</Text>
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
    color: themeColors.Grey,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  reviewButton: {
    backgroundColor: "#FFF",
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
    color: "#000",
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  shareText: {
    fontSize: 16,
    color: "#FFF",
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  toggleLabel: {
    color: "#FFF",
    fontSize: 14,
  },
});
