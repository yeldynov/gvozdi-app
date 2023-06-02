import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import moment from 'moment';
import Spacer from './Spacer';
import Title from './Title';
import Chart from './Chart';
import { Context as SessionContext } from '../context/SessionContext';
import i18n from '../../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';

const Statistics = () => {
  const { state, fetchSessions } = useContext(SessionContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSessions().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (state.length < 1 && !isLoading) {
    return (
      <Text style={styles.emptyText}>{i18n.t('cleanStatisticsText')}</Text>
    );
  }

  const totalTime = state.reduce((acc, curr) => curr.duration + acc, 0);
  const average = (
    moment.duration(totalTime).asMinutes() / state.length
  ).toFixed(0);

  const durationsByDate = {};
  state.forEach((item) => {
    const date = moment(item.date).format('DD/MM');

    if (durationsByDate[date]) {
      durationsByDate[date] += moment.duration(item.duration).asMinutes();
      console.log(durationsByDate);
    } else {
      durationsByDate[date] = moment.duration(item.duration).asMinutes();
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

  const textStyle = isDarkTheme ? styles.darkText : styles.lightText;

  return (
    <ScrollView>
      {isLoading ? (
        <View>
          <ActivityIndicator size='large' color='#FF5500' />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsTotal')} {state.length}
            {i18n.t('statisticsSessionsForText')} {durations.length}
            {i18n.t('statisticsDaysText')}
          </Text>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsAllText')} {moment.utc(totalTime).format('hh')}
            {i18n.t('statisticsHourText')}
            {moment(totalTime).format('mm')} {i18n.t('statisticsMinText')}
            {moment(totalTime).format('ss')} {i18n.t('statisticSecText')}
          </Text>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsAveragePerSessionText')} {average}
            {i18n.t('statisticsMinText')}
          </Text>
          <Text style={[styles.text, textStyle]}>
            {i18n.t('statisticsAveragePerDayText')} {averageDuration}
            {i18n.t('statisticsMinText')}
          </Text>
          <Spacer />
          <Title h4>{i18n.t('statisticsLastTimeText')}</Title>
          <Text style={[styles.text, textStyle]} h5>
            {i18n.t('statisticsTimeText')}
            {moment.duration(state[0]?.duration).asMinutes().toFixed(0)}
            {i18n.t('statisticsMinText')}
            {moment(state[0]?.duration).format('ss')}
            {i18n.t('statisticSecText')}
          </Text>
          <Text style={[styles.text, textStyle]} h5>
            {i18n.t('statisticsDateText')}
            {moment(state[0]?.date).format('DD/MM/YYYY')}
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
    fontFamily: 'sans-serif-condensed',
    fontSize: 16,
  },
  darkText: { color: '#000' },
  darkText: { color: '#fff' },
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
