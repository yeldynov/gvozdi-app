import React from 'react';
import { StyleSheet, StatusBar, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import Stopwatch from '../components/Stopwatch';
import RandomImage from '../components/RandomImage';

const SessionCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <RandomImage />
        <Text style={styles.createText}></Text>
        <Spacer />
        <Stopwatch />
      </Spacer>
    </SafeAreaView>
  );
};

SessionCreateScreen.navigationOptions = {
  title: 'Практика',
  tabBarIcon: (
    <Image
      source={require('../../assets/details_4.png')}
      style={{ width: 24, height: 24 }}
    />
  ),
};
// SessionCreateScreen.navigationOptions = {
//   title: 'Практика',
//   tabBarIcon: <FontAwesome name='plus' size={24} color='white' />,
// tabBarIcon: <Foundation name='foot' size={24} color='white' />,

// };

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
    paddingTop: StatusBar.currentHeight,
  },
});

export default SessionCreateScreen;
