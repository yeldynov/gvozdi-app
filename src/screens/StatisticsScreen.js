import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import Statistics from '../components/Statistics';
import Title from '../components/Title';

const StatisticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Статистика</Title>
      <Statistics />
    </SafeAreaView>
  );
};

StatisticsScreen.navigationOptions = {
  title: 'Статистика',
  tabBarIcon: <Ionicons name='stats-chart' size={24} color='white' />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default StatisticsScreen;
