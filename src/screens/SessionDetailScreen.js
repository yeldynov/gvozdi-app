import React, { useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as SessionContext } from '../context/SessionContext';
import moment from 'moment';
import Spacer from '../components/Spacer';

const SessionDetailScreen = ({ navigation }) => {
  const { state } = useContext(SessionContext);
  const _id = navigation.getParam('_id');

  const session = state.find((s) => s._id === _id);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/sessionDetails.jpeg')}
        style={styles.image}
      />
      <Spacer />
      <Text h4>Дата: {moment(session.date).format('YYYY-MM-DD hh:mm')}</Text>
      <Text h4>Длительность: {moment(session.duration).format('mm:ss')}</Text>
      <Text h4>Отзыв: {session.feedback}</Text>
    </View>
  );
};

SessionDetailScreen.navigationOptions = () => {
  return {
    headerTitle: 'Детали Сессии',
  };
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
  },
});

export default SessionDetailScreen;
