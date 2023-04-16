"use client";

import { PropsWithChildren, createContext, useState } from "react";

type Theme = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<Theme>({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("light");

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const value: Theme = {
    theme,
    setTheme: updateTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
