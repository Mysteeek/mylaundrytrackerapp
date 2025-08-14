import { ThemeProvider } from "@/utils/theme-context"; // ✅ Your theme context
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// ✅ Import screens
import Home from "../app/(tabs)/Home";
import More from "../app/(tabs)/More";
import Track from "../app/(tabs)/Track";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Track" component={Track} />
          <Stack.Screen name="More" component={More} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
