import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Dimensions, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../utils/theme-context";

const { width } = Dimensions.get("window");

export default function More() {
  const { isLightMode, toggleTheme, colors } = useTheme();

  return (
    <ScrollView 
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Title */}
      <Text style={[styles.pageTitle, { color: colors.text }]}>More Options</Text>

      {/* Review Section */}
      <TouchableOpacity style={[styles.reviewButton, { backgroundColor: colors.card }]}>
        <Text style={[styles.reviewText, { color: colors.text }]}>Review</Text>
        <Ionicons name="chevron-down" size={width * 0.05} color={colors.icon} />
      </TouchableOpacity>

      {/* Share App */}
      <TouchableOpacity style={styles.shareRow}>
        <SimpleLineIcons name="share" size={width * 0.055} color={colors.icon} />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 50,
    paddingHorizontal: width * 0.05,
  },
  pageTitle: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  reviewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  reviewText: {
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
  shareRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  shareText: {
    fontSize: width * 0.045,
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
    fontSize: width * 0.04,
  },
});