import React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';
import Stopwatch from '../components/Stopwatch';

const SessionCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Image
          source={require('../../assets/createSession.jpeg')}
          style={styles.image}
        />

        <Spacer />
        <Stopwatch />
      </Spacer>
    </SafeAreaView>
  );
};

SessionCreateScreen.navigationOptions = {
  title: 'Практика',
  tabBarIcon: <FontAwesome name='plus' size={24} color='white' />,
};

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    color: 'lightgray',
    height: '50%',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default SessionCreateScreen;
