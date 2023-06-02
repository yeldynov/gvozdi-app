import { useContext } from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import i18n from '../../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';

const Chart = ({ labels, averageLineDataset, durations, accumulatedData }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const daysChartData = {
    labels,
    datasets: [
      {
        data: durations,
      },
      averageLineDataset,
    ],
  };

  const accumulatedChartData = {
    labels: labels.slice().reverse(),
    datasets: [
      {
        data: accumulatedData,
      },
    ],
  };

  if (!daysChartData || !accumulatedChartData) return null;

  const titleStyle = isDarkTheme ? styles.darkTitle : styles.lightTitle;
  const bgGradientFromStyle = isDarkTheme ? '#555555' : '#f1f1f1';
  const chartColorStyle = isDarkTheme ? '#FEDC00' : '#3F51B5';

  return (
    <View>
      <Text style={[styles.chartTitle, titleStyle]}>
        {i18n.t('chartStatsPerDayText')}
      </Text>
      <LineChart
        data={daysChartData}
        width={Dimensions.get('window').width - 40} // Adjust the width of the chart
        height={Dimensions.get('window').height / 2.5} // Adjust the height of the chart
        yAxisSuffix={i18n.t('statisticsMinText')}
        chartConfig={{
          backgroundGradientFrom: bgGradientFromStyle,
          backgroundGradientTo: bgGradientFromStyle,
          decimalPlaces: 0, // Number of decimal places in Y-axis labels
          color: () => chartColorStyle,
          style: {
            borderRadius: 16,
          },
        }}
        bezier // Smooth line chart
        withHorizontalLabels={true} // Enable horizontal labels
        xLabelsOffset={0} // Adjust horizontal labels offset
        fromZero={true} // Start the Y-axis from zero
        style={{
          xAxisLabelRotation: 45, // Rotate the X-axis labels by 45 degrees
        }}
      />
      <Text style={[styles.chartTitle, titleStyle]}>
        {i18n.t('chartStatsAccumulatedText')}
      </Text>
      <LineChart
        data={accumulatedChartData}
        width={Dimensions.get('window').width - 40} // Adjust the width of the chart
        height={Dimensions.get('window').height / 2.5} // Adjust the height of the chart
        yAxisSuffix={i18n.t('statisticsMinText')}
        chartConfig={{
          backgroundGradientFrom: bgGradientFromStyle,
          backgroundGradientTo: bgGradientFromStyle,
          decimalPlaces: 0, // Number of decimal places in Y-axis labels
          color: () => chartColorStyle,
          style: {
            borderRadius: 16,
          },
        }}
        bezier // Smooth line chart
        withHorizontalLabels={true} // Enable horizontal labels
        xLabelsOffset={0} // Adjust horizontal labels offset
        fromZero={true} // Start the Y-axis from zero
        style={{
          xAxisLabelRotation: 45, // Rotate the X-axis labels by 45 degrees
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'sans-serif-condensed',
  },
  darkTitle: { color: '#00A896' },
  lightTitle: { color: '#002C7D' },
});

export default Chart;
