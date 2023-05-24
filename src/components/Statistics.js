import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import moment from 'moment';
import Spacer from './Spacer';
import Title from './Title';
import Chart from './Chart';
import { Context as SessionContext } from '../context/SessionContext';

const Statistics = () => {
  const { state, fetchSessions } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSessions().then(() => {
      setIsLoading(false);
    });
  }, []);

  const totalTime = state.reduce((acc, curr) => curr.duration + acc, 0);
  const average = (moment(totalTime).minutes() / state.length).toFixed(0);

  const durationsByDate = {};
  state.forEach((item) => {
    const date = moment(item.date).format('MM-DD');

    if (durationsByDate[date]) {
      durationsByDate[date] += moment(item.duration).minutes();
    } else {
      durationsByDate[date] = moment(item.duration).minutes();
    }
  });

  const labels = Object.keys(durationsByDate);
  const durations = Object.values(durationsByDate);

  // Average
  const averageDuration =
    durations.reduce((sum, duration) => sum + duration, 0) / durations.length;

  const averageLineDataset = {
    data: Array(labels.length).fill(averageDuration),
    color: (opacity = 1) => `rgba(255, 0,0, ${opacity})`,
  };

  // Accumulated
  const accumulatedData = durations.reduce((acc, duration, index) => {
    if (index === 0) {
      acc.push(duration);
    } else {
      acc.push(acc[index - 1] + duration);
    }
    return acc;
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <View>
          <ActivityIndicator size='large' color='orange' />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>Итого: {state.length} сессий</Text>
          <Text>Итого: {durations.length} дней</Text>
          <Text>
            Всего: {moment(totalTime).format('mm')} мин{' '}
            {moment(totalTime).format('ss')} сек
          </Text>
          <Text>Среднее на сессию: {average} мин</Text>
          <Text>Среднее в день: {averageDuration} мин</Text>
          <Spacer />
          <Title h4>Последний раз:</Title>
          <Text h5>
            Время: {moment(state[0]?.duration).format('mm')} мин{' '}
            {moment(state[0]?.duration).format('ss')} сек
          </Text>
          <Text h5>
            Дата: {moment(state[0]?.date).format('DD MMM YYYY')} г.
          </Text>
          <Spacer />
          <Spacer />
          <Chart
            labels={labels}
            averageLineDataset={averageLineDataset}
            durations={durations}
            accumulatedData={accumulatedData}
          />
        </View>
      )}
    </ScrollView>
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
