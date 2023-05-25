import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = ({ children, customStyles }) => {
  return <Text style={[styles.title, customStyles]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    marginBottom: 10,
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    textAlign: 'center',
  },
});
