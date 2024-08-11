import React, { createContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface ThemeContextProps {
  changeTheme: (themeName: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  changeTheme: () => {},
});

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeName === 'light' ? 'light' : 'dark',
    },
  });

  const changeTheme = (newTheme: string) => {
    setThemeName(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
