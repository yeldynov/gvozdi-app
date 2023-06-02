import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Statistics from '../components/Statistics';
import Title from '../components/Title';
import i18n from '../../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';

const StatisticsScreen = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Title>{i18n.t('statisticsTitleText')}</Title>
      <Statistics />
    </SafeAreaView>
  );
};

StatisticsScreen.navigationOptions = {
  // title: i18n.t('statisticsTitleText'),
  title: '',
  tabBarIcon: (
    <Image
      source={require('../../assets/icons/stats.png')}
      style={{ width: 24, height: 24 }}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: { backgroundColor: '#FFFFFF' },
  darkContainer: { backgroundColor: '#1E1E1E' },
});

export default StatisticsScreen;
