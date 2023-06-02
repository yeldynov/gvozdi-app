import React, { useContext } from 'react';
import { StyleSheet, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import Stopwatch from '../components/Stopwatch';
import { ThemeContext } from '../context/ThemeContext';

const SessionCreateScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Spacer>
        <Image style={styles.image} source={require('../../assets/man.png')} />
        <Text style={styles.createText}></Text>
        <Spacer />
        <Stopwatch />
      </Spacer>
    </SafeAreaView>
  );
};

SessionCreateScreen.navigationOptions = {
  // title: 'Практика',
  title: '',
  tabBarIcon: (
    <Image
      source={require('../../assets/details_4.png')}
      style={{ width: 24, height: 24 }}
    />
  ),
};

const styles = StyleSheet.create({
  createText: {
    fontFamily: 'sans-serif-condensed',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  title: {
    alignSelf: 'center',
    color: '#9B9B9B',
    height: '50%',
  },
  container: {
    flex: 1,
  },
  lightContainer: { backgroundColor: '#ffffff' },
  darkContainer: { backgroundColor: '#1E1E1E' },
  image: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default SessionCreateScreen;
