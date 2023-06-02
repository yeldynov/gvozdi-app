import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const NavLink = ({ navigation, text, routeName }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const linkStyle = isDarkTheme ? styles.darkLink : styles.lightLink;

  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Spacer>
        <Text style={[styles.link, linkStyle]}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    // color: '#002C7D',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  darkLink: { color: '#00A896' },
  lightLink: { color: '#002C7D' },
});

export default withNavigation(NavLink);
