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
        <Stack.Screen name="Home" options={{ headerShown: true }} />
        <Stack.Screen name="Status" options={{ headerShown: false }} />
        <Stack.Screen name="Track" options={{ headerShown: false }} />
        <Stack.Screen name="More" options={{ headerShown: false }} />
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