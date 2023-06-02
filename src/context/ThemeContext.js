import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    loadThemePreference();
  }, []);

  loadThemePreference = async () => {
    try {
      const themePreference = await AsyncStorage.getItem('themePreference');
      if (themePreference) {
        setIsDarkTheme(themePreference === 'dark');
      }
    } catch (error) {
      console.error('Error loading theme preference', error);
    }
  };

  const toggleTheme = async () => {
    try {
      const newThemePreference = isDarkTheme ? 'light' : 'dark';

      await AsyncStorage.setItem(
        'themePreference',
        JSON.stringify(newThemePreference)
      );

      setIsDarkTheme(!isDarkTheme);
    } catch (error) {
      console.error('Error saving theme preference', error);
    }
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
