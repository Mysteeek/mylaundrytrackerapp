import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLightMode, setIsLightMode] = useState(true);

  const colors = isLightMode
    ? {
        background: "#d3d3d3", // light gray
        text: "#000000",
        card: "#f0f0f0",
        icon: "#333333",
      }
    : {
        background: "#001f3f", // dark blue
        text: "#ffffff",
        card: "#002b5c",
        icon: "#bbbbbb",
      };

  const toggleTheme = () => setIsLightMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
