import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    textAlign: 'center',
  },
});
