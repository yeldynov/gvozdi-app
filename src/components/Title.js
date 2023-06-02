import { StyleSheet, Text } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Title = ({ children, customStyles }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const textColor = isDarkTheme ? styles.lightText : styles.darkText;

  return (
    <Text style={[styles.title, textColor, customStyles]}>{children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    marginBottom: 10,
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    textAlign: 'center',
  },
  darkText: { color: '#002C7D' },
  lightText: { color: '#00A896' },
});
