import React from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Chart = ({ labels, averageLineDataset, durations, accumulatedData }) => {
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

  return (
    <View>
      <Text style={styles.chartTitle}>Статистика по дням:</Text>
      <LineChart
        data={daysChartData}
        width={Dimensions.get('window').width - 40} // Adjust the width of the chart
        height={Dimensions.get('window').height / 2.5} // Adjust the height of the chart
        yAxisSuffix=' мин'
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // Number of decimal places in Y-axis labels
          color: (opacity = 1) => `rgba(0,44, 125, ${opacity})`,
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
      <Text style={styles.chartTitle}>Накопленный Итог:</Text>
      <LineChart
        data={accumulatedChartData}
        width={Dimensions.get('window').width - 40} // Adjust the width of the chart
        height={Dimensions.get('window').height / 2.5} // Adjust the height of the chart
        yAxisSuffix=' мин'
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // Number of decimal places in Y-axis labels
          color: (opacity = 1) => `rgba(0, 140, 140, ${opacity})`,
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
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
  },
});

export default Chart;
