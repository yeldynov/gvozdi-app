import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Text } from 'react-native-elements';
import { Context as SessionContext } from '../context/SessionContext';
import moment from 'moment';
import Spacer from '../components/Spacer';
import { Octicons } from '@expo/vector-icons';
import ConfirmModal from '../components/CofirmModal';
import RandomImage from '../components/RandomImage';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/details_3.png')}
          style={styles.image}
        />
      </View>
      <Spacer />

      {/* <Spacer>
        <RandomImage
          customStyles={{
            width: Dimensions.get('window').width / 1.5,
            height: Dimensions.get('window').height / 3,
          }}
        />
      </Spacer> */}
      <View style={styles.outerContainer}>
        <View style={styles.textGroup}>
          <Text style={styles.textKey}>Дата:</Text>
          <Text style={styles.textValue}>
            {moment(session?.date).format('DD MMM YYYY hh:mm')}
          </Text>
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.textKey}>Длительность:</Text>
          <Text style={styles.textValue}>
            {moment(session?.duration).format('mm:ss')}
          </Text>
        </View>
        <View style={styles.feedbackGroup}>
          <Text style={styles.textKey}>Отзыв:</Text>
          <Text style={styles.textValue}>{session?.feedback}</Text>
        </View>
        <Spacer />
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={styles.removeBtn}
        >
          <Text style={styles.removeText}>Удалить Сессию</Text>
          <Octicons name='trash' size={36} color='red' />
        </TouchableOpacity>
        <ConfirmModal
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          onConfirm={removeSession}
          message='Вы уверены, что хотите удалить эту сессию?'
          confirmButtonMessage='Удалить'
        />
      </View>
    </SafeAreaView>
  );
};

SessionDetailScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  outerContainer: {
    marginHorizontal: 40,
  },
  image: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  removeBtn: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#FF3333',
    borderRadius: 24,
    marginTop: 30,
  },
  removeText: {
    marginRight: 10,
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    color: '#FF3333',
  },
  textKey: {
    fontWeight: 'bold',
    color: '#002C7D',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'sans-serif-condensed',
  },
  textValue: {
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
    textAlign: 'justify',
  },
  textGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedbackGroup: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SessionDetailScreen;
