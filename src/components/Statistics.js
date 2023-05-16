import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import moment from 'moment';
import Spacer from './Spacer';

const Statistics = ({ state }) => {
  const totalTime = state.reduce((acc, curr) => curr.duration + acc, 0);
  const average = (moment(totalTime).format('mm') / state.length).toFixed(0);

  return (
    <View style={styles.container}>
      <Text h3>Статистика:</Text>
      <Text>Итого: {state.length} сессий</Text>
      <Text>
        Всего: {moment(totalTime).format('mm')} мин{' '}
        {moment(totalTime).format('ss')} сек
      </Text>
      <Text>Среднее: {average} мин</Text>
      <Spacer />
      <Text h4>Последний раз:</Text>
      <Text h5>
        Время: {moment(state[0]?.duration).format('mm')} мин{' '}
        {moment(state[0]?.duration).format('ss')} сек
      </Text>
      <Text h5>Дата: {moment(state[0]?.date).format('YYYY-MM-DD')}</Text>
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 20,
  },
});
