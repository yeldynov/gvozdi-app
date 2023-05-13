import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';

const SessionCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h3>Статистика:</Text>
        <Text h5>Подряд: 10 дней</Text>
        <Text h5>Всего Часов: 50</Text>
        <Text h5>Итого: 36 гвоздесессий</Text>
        <Spacer />
        <Text h4>Последний раз:</Text>
        <Text h5>Время: 40 мин 15 сек</Text>
        <Text h5>Дата: 13.05.2023</Text>

        <Spacer />
        <Button title='На Гвозди!' />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight * 2,
  },
});

export default SessionCreateScreen;
