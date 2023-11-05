import React, { ReactNode, createContext, useState } from "react";
import Themes from "../enums/Themes";

interface IThemeContext {
  theme: Themes;
  changeTheme: (themeOption: Themes) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: Themes.Dark,
  changeTheme: () => {},
});

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState(Themes.Dark);

  const handleThemeChange = (themeOption: Themes) => {
    setTheme(themeOption);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
