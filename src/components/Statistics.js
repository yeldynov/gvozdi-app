import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationEvents } from 'react-navigation';
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

  if (state.length < 1 && !isLoading) {
    return (
      <Text style={styles.emptyText}>
        Статистика чиста. Давайте встанем на гвозди...
      </Text>
    );
  }

  const totalTime = state.reduce((acc, curr) => curr.duration + acc, 0);
  const average = (moment(totalTime).minutes() / state.length).toFixed(0);

  const durationsByDate = {};
  state.forEach((item) => {
    const date = moment(item.date).format('DD/MM');

    if (durationsByDate[date]) {
      durationsByDate[date] += moment(item.duration).minutes();
    } else {
      durationsByDate[date] = moment(item.duration).minutes();
    }
  });

  const labels = Object.keys(durationsByDate);
  const durations = Object.values(durationsByDate);

  // Average
  const averageDuration = (
    durations.reduce((sum, duration) => sum + duration, 0) / durations.length
  ).toFixed();

  const averageLineDataset = {
    data: Array(labels.length).fill(averageDuration),
    color: (opacity = 1) => `rgba(255, 0,0, ${opacity})`,
  };

  // Accumulated
  const accumulatedData = durations
    .slice()
    .reverse()
    .reduce((acc, duration, index) => {
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
          <ActivityIndicator size='large' color='#FF5500' />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Итого: {state.length} сессий</Text>
          <Text style={styles.text}>Итого: {durations.length} дней</Text>
          <Text style={styles.text}>
            Всего: {moment(totalTime).format('mm')} мин{' '}
            {moment(totalTime).format('ss')} сек
          </Text>
          <Text style={styles.text}>Среднее на сессию: {average} мин</Text>
          <Text style={styles.text}>Среднее в день: {averageDuration} мин</Text>
          <Spacer />
          <Title h4>Последний раз:</Title>
          <Text style={styles.text} h5>
            Время: {moment(state[0]?.duration).format('mm')} мин{' '}
            {moment(state[0]?.duration).format('ss')} сек
          </Text>
          <Text style={styles.text} h5>
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
  text: {
    color: '#008C8C',
    fontFamily: 'sans-serif-condensed',
    fontSize: 16,
  },
  emptyText: {
    fontStyle: 'italic',
    marginTop: 30,
    marginHorizontal: 30,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    color: '#9B9B9B',
  },
});
