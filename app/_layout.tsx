import { Stack } from "expo-router";
import { View } from "react-native";
import { ThemeProvider, useTheme } from "../utils/theme-context";

function ThemedStack() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 2, backgroundColor: colors.background }}>
      <Stack
        initialRouteName="signup" 
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />

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
