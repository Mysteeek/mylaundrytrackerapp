// import { useRouter } from "expo-router"; // ✅ This is the correct import for Expo Router
// import React from "react";
// import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
// import { introStyles } from "../styles/intro-styles";

// export default function IndexScreen() {
//   const router = useRouter(); // ✅ Router object for navigation

//   return (
//     <View style={introStyles.container}>
//       <ImageBackground
//         style={introStyles.background}
//         source={require("../assets/images/laundry.home.jpg")}
//         resizeMode="cover"
//       >
//         <View style={introStyles.body}>
//           <Text style={introStyles.bodyText}>My Laundry Tracker</Text>
//         </View>

//         <TouchableOpacity
//           style={introStyles.button}
//           onPress={() => router.replace("/(tabs)/Home")} // ✅ Correct method
//         >
//           <Text style={introStyles.buttonText}>Track my laundry</Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// }
