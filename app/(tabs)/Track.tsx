import { themeColors } from "@/utils/theme-utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Track() {
  return (
    <View style={[styles.container, { backgroundColor: themeColors.blue }]}>
      <Text style={styles.pageTitle}>Track</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={{ marginHorizontal: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonTextLight}>Track Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#173B55" }]}>
          <Text style={styles.buttonTextLight}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#E9E9E9" }]}>
          <Text style={styles.buttonTextDark}>Process</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#E9E9E9" }]}>
          <Text style={styles.buttonTextDark}>Completed</Text>
        </TouchableOpacity>
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
});
