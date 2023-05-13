import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const SessionListScreen = ({ navigation }) => {
  return (
    <>
      <Text>SessionListScreen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('SessionDetail')}
      />
    </>
  );
};

export default SessionListScreen;

const styles = StyleSheet.create({});
