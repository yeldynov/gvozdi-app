import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import moment from 'moment';
import Spacer from './Spacer';
import Title from './Title';
import { Context as SessionContext } from '../context/SessionContext';

const Statistics = () => {
  const { state, fetchSessions } = useContext(SessionContext);

  useEffect(() => {
    fetchSessions();
  }, []);

  const totalTime = state.reduce((acc, curr) => curr.duration + acc, 0);
  const average = (moment(totalTime).format('mm') / state.length).toFixed(0);

  return (
    <View style={styles.container}>
      <Text>Итого: {state.length} сессий</Text>
      <Text>
        Всего: {moment(totalTime).format('mm')} мин{' '}
        {moment(totalTime).format('ss')} сек
      </Text>
      <Text>Среднее: {average} мин</Text>
      <Spacer />
      <Title h4>Последний раз:</Title>
      <Text h5>
        Время: {moment(state[0]?.duration).format('mm')} мин{' '}
        {moment(state[0]?.duration).format('ss')} сек
      </Text>
      <Text h5>Дата: {moment(state[0]?.date).format('YYYY-MM-DD')}</Text>
      <Spacer />
      <Spacer />
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
