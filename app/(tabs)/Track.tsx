import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../utils/theme-context";

type TrackingStatus = "Received" | "Processing" | "Completed" | null;

export default function Track() {
  const { colors } = useTheme();
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [status, setStatus] = useState<TrackingStatus>(null);

  const handleSearch = async () => {
    if (!/^\d{8}$/.test(trackingNumber)) {
      Alert.alert("Invalid Input", "Tracking number must be exactly 8 digits.");
      setStatus(null);
      return;
    }

    const stored = await AsyncStorage.getItem("laundryHistory");
    const history = stored ? JSON.parse(stored) : [];

    const foundOrder = history.find(
      (item: any) => item.trackingCode === trackingNumber.trim()
    );

    if (foundOrder) {
      setStatus(foundOrder.status);
    } else {
      Alert.alert("Not Found", "Tracking number not found.");
      setStatus(null);
    }
  };

  const getButtonColor = (buttonStatus: TrackingStatus) =>
    status === buttonStatus ? "#FF8040" : colors.card;

  const getTextStyle = (buttonStatus: TrackingStatus) =>
    status === buttonStatus
      ? styles.buttonTextLight
      : [styles.buttonTextDark, { color: colors.text }];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.pageTitle, { color: colors.text }]}>Track Your Order</Text>

      <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
        <Ionicons
          name="search"
          size={20}
          color={colors.secondaryText}
          style={{ marginHorizontal: 8 }}
        />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Enter 8-digit tracking number"
          placeholderTextColor={colors.secondaryText}
          value={trackingNumber}
          onChangeText={setTrackingNumber}
          keyboardType="numeric"
          maxLength={8}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonTextLight}>Track</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {["Received", "Processing", "Completed"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, { backgroundColor: getButtonColor(item as TrackingStatus) }]}
          >
            <Text style={getTextStyle(item as TrackingStatus)}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {status && (
        <Text style={[styles.statusMessage]}>
          Your order status is: {status}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: 60, 
    paddingHorizontal: 20, 
    alignItems: "center" 
  },
  pageTitle: { 
    fontSize: 26, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 25 
  },
  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    borderRadius: 8, 
    overflow: "hidden", 
    width: "100%", 
    height: 50, 
    marginBottom: 25 
  },
  searchInput: { 
    flex: 1, 
    height: "100%", 
    fontSize: 16 
  },
  searchButton: { 
    backgroundColor: "#173B55", 
    height: "100%", 
    justifyContent: "center", 
    alignItems: "center", 
    paddingHorizontal: 15 
  },
  button: { 
    flex: 1, 
    height: 50, 
    borderRadius: 8, 
    justifyContent: "center", 
    alignItems: "center", 
    marginHorizontal: 5 
  },
  buttonTextLight: { 
    color: "#FFF", 
    fontWeight: "bold", 
    fontSize: 16 
  },
  buttonTextDark: { 
    fontWeight: "bold", 
    fontSize: 16 
  },
  row: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "100%" 
  },
  statusMessage: { 
    marginTop: 20, 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#FF8040", 
    textAlign: "center" 
  },
});
