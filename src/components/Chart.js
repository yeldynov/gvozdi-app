import React from 'react';
import { View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

const data = [
  { x: 'Jan', y: 20 },
  { x: 'Feb', y: 45 },
  { x: 'Mar', y: 28 },
  { x: 'Apr', y: 80 },
  { x: 'May', y: 99 },
  { x: 'Jun', y: 43 },
];

const Chart = () => {
  return (
    <View>
      <VictoryChart theme={VictoryTheme.grayscale}>
        <VictoryBar data={data} x='x' y='y' />
      </VictoryChart>
    </View>
  );
};

export default Chart;
