import { useRouter } from "expo-router"; // 1. Import the router
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { introStyles } from "../styles/intro-styles";

export default function App() {
  const router = useRouter(); // 2. Get the router instance

  const handlePress = () => {
    // 3. Navigate to the home screen, replacing the intro screen
    // The path '/home' corresponds to your '(tabs)/home.tsx' file.
    router.replace("/(tabs)/Home"); 
  };

  return (
    <View style={introStyles.container}>
      <ImageBackground
        style={introStyles.background}
        source={require("../assets/images/laundry.home.jpg")}
        resizeMode="cover"
      >
        <View style={introStyles.body}>
          <Text style={introStyles.bodyText}>My Laundry Tracker</Text>
        </View>

        <TouchableOpacity
          style={introStyles.button}
          onPress={handlePress} // Use the navigation handler
        >
          <Text style={introStyles.buttonText}>Track my laundry</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}