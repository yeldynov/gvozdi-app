import React, { useContext, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as SessionContext } from '../context/SessionContext';
import moment from 'moment';
import Spacer from '../components/Spacer';
import { Octicons } from '@expo/vector-icons';
import ConfirmModal from '../components/CofirmModal';

const SessionDetailScreen = ({ navigation }) => {
  const { state, deleteSession } = useContext(SessionContext);
  const _id = navigation.getParam('_id');
  const [isVisible, setIsVisible] = useState(false);

  const session = state.find((s) => s._id === _id);

  function removeSession() {
    navigation.navigate('SessionList');
    setIsVisible(false);
    deleteSession(_id);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/sessionDetails.jpeg')}
        style={styles.image}
      />
      <Spacer />
      <Text h4>Дата: {moment(session?.date).format('YYYY-MM-DD hh:mm')}</Text>
      <Text h4>Длительность: {moment(session?.duration).format('mm:ss')}</Text>
      <Text h4>Отзыв: {session?.feedback}</Text>
      <Spacer />
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={styles.remove}
      >
        <Text style={styles.removeText}>Удалить Сессию</Text>
        <Octicons name='repo-deleted' size={36} color='red' />
      </TouchableOpacity>
      <ConfirmModal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onConfirm={removeSession}
        message='Вы уверены, что хотите удалить эту сессию?'
        confirmButtonMessage='Удалить'
      />
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
  remove: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeText: {
    marginRight: 10,
    fontSize: 16,
  },
});

export default SessionDetailScreen;
