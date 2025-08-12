import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
      name="home"
      options={{
        headerShown: false,
        title: "Home"
      }}/>
      
      <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}/>

      <Stack.Screen
      name="track"
      options={{
        headerShown: false,
        title: "Track"
      }}/>

      <Stack.Screen
      name="more"
      options={{
        headerShown: false,
        title: "More"
      }}/>

    </Stack>
  );
}