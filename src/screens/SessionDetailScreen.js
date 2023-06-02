import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Text } from 'react-native-elements';
import { Context as SessionContext } from '../context/SessionContext';
import moment from 'moment';
import Spacer from '../components/Spacer';
import { Octicons } from '@expo/vector-icons';
import ConfirmModal from '../components/CofirmModal';
import i18n from '../../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';

const SessionDetailScreen = ({ navigation }) => {
  const { state, deleteSession } = useContext(SessionContext);
  const _id = navigation.getParam('_id');
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);

  const bgContainerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const textStyle = isDarkTheme ? styles.darkText : styles.lightText;

  const session = state.find((s) => s._id === _id);

  function removeSession() {
    navigation.navigate('SessionList');
    setIsVisible(false);
    deleteSession(_id);
  }

  return (
    <SafeAreaView style={[styles.container, bgContainerStyle]}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/details_3.png')}
            style={styles.image}
          />
        </View>
        <Spacer />
        <View style={styles.outerContainer}>
          <View style={styles.textGroup}>
            <Text style={[styles.textKey, textStyle]}>
              {i18n.t('dateKeyText')}
            </Text>
            <Text style={[styles.textValue, textStyle]}>
              {moment(session?.date).format('DD/MM/YYYY hh:mm')}
            </Text>
          </View>
          <View style={styles.textGroup}>
            <Text style={[styles.textKey, textStyle]}>
              {i18n.t('durationKeyText')}
            </Text>
            <Text style={[styles.textValue, textStyle]}>
              {moment.utc(session?.duration).format('hh:mm:ss')}
            </Text>
          </View>
          <View style={styles.feedbackGroup}>
            <Text style={[styles.textKey, textStyle]}>
              {i18n.t('feedbackKeyText')}
            </Text>
            <Text style={[styles.textValue, textStyle]}>
              {session?.feedback}
            </Text>
          </View>
          <Spacer />
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={styles.removeBtn}
          >
            <Text style={styles.removeText}>
              {i18n.t('removeRecordBtnText')}
            </Text>
            <Octicons name='trash' size={36} color='red' />
          </TouchableOpacity>
          <ConfirmModal
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
            onConfirm={removeSession}
            message={i18n.t('confirmModalMessage')}
            confirmButtonMessage={i18n.t('confirmModalBtnMessage')}
            titleText={i18n.t('confirmModalTitleText')}
            rejectButtonMessage={i18n.t('confirmModalrejectBtnText')}
          />
        </View>
        <Spacer />
      </ScrollView>
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
  lightContainer: { backgroundColor: '#FFFFFF' },
  darkContainer: { backgroundColor: '#1E1E1E' },
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
    // color: '#002C7D',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'sans-serif-condensed',
  },
  textValue: {
    // color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
    textAlign: 'justify',
  },
  darkText: { color: '#00A896' },
  lightText: { color: '#002C7D' },
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
