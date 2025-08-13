import { RouteProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../app/(tabs)/types";

type DetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "DetailsScreen"
>;

type Props = {
  route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: Props) {
  const { name, phone, clothes, code, date, time, status } = route.params;

  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Clothes: {clothes}</Text>
      <Text>Code: {code}</Text>
      <Text>Date: {date}</Text>
      <Text>Time: {time}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "blue", padding: 20 },
});
