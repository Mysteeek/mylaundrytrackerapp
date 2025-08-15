import { ThemeProvider, useTheme } from "@/utils/theme-context";
import { Stack } from "expo-router";
import { View } from "react-native";

function ThemedStack() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 2, backgroundColor: colors.background }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        {/* Main Tabs entry */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Any extra screens OUTSIDE tabs go here */}
        {/* Example:
        <Stack.Screen name="details" options={{ headerShown: false }} />
        */}
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStack />
    </ThemeProvider>
  );
}
