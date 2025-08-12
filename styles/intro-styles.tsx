import { StyleSheet } from "react-native";
import { themeColors } from "../utils/theme-utils";

export const introStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: "space-between", // Pushes body to top/middle and button to bottom
    alignItems: "center",
    paddingVertical: 40,
  },

  body: {
    backgroundColor: themeColors.orange,
    padding: 20,
    borderRadius: 20,
    marginTop: 300, // Moves it down a bit from the top
    opacity: 0.7,

  },

  bodyText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },

  button: {
    backgroundColor: themeColors.orange,
    paddingVertical: 8, // smaller button height
    paddingHorizontal: 20, // keeps it narrow
    borderRadius: 50, // fully rounded
    marginBottom: 30, // spacing from bottom
    alignSelf: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});