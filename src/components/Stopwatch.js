import React, { useRef, useContext } from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { useKeepAwake } from 'expo-keep-awake';
import StopwatchTimer from 'react-native-animated-stopwatch-timer';
import { Context as SessionContext } from '../context/SessionContext';
import { navigate } from '../utils/navigationRef';
import FeedbackModal from './FeedbackModal';
import ConfirmModal from './CofirmModal';
import i18n from '../../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';

const Stopwatch = () => {
  useKeepAwake();
  const stopwatchTimerRef = useRef(null);
  const { createSession } = useContext(SessionContext);
  const { isDarkTheme } = useContext(ThemeContext);

  const [isCounting, setIsCounting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  // Methods to control the stopwatch
  function play() {
    setShowConfirm(false);
    stopwatchTimerRef.current?.play();
    setIsCounting(true);
  }
  function pause() {
    stopwatchTimerRef.current?.pause();
    setIsCounting(false);
    setModalVisible(true);
    console.log(stopwatchTimerRef.current.getSnapshot());
  }
  function reset() {
    stopwatchTimerRef.current?.reset();
    setFeedback('');
  }

  async function save() {
    // saving to db logic...
    await createSession(stopwatchTimerRef.current.getSnapshot(), feedback);
    reset();
    setModalVisible(!modalVisible);
    navigate('SessionList');
  }

  const stopWatchContainerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const stopWatchCharStyle = isDarkTheme ? styles.darkChar : styles.lightChar;

  return (
    <>
      <StopwatchTimer
        ref={stopwatchTimerRef}
        containerStyle={[styles.stopWatchContainer, stopWatchContainerStyle]}
        textCharStyle={[styles.stopWatchChar, stopWatchCharStyle]}
        trailingZeros={2}
      />
      {showConfirm && (
        <ConfirmModal
          isVisible={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={play}
          message={i18n.t('confirmModalPrepareMessage')}
          confirmButtonMessage={i18n.t('confirmModalPrepareBtnText')}
          titleText={i18n.t('confirmModalPrepareTitleText')}
          rejectButtonMessage={i18n.t('confirmModalrejectBtnText')}
        />
      )}
      {!isCounting && (
        <FeedbackModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          stopwatchTimerRef={stopwatchTimerRef}
          feedback={feedback}
          setFeedback={setFeedback}
          onSave={save}
        />
      )}
      {isCounting ? (
        <TouchableOpacity
          style={[styles.stopButton, styles.mainButton]}
          onPress={pause}
        >
          <Text style={styles.buttonText}>
            {i18n.t('stopwatchStopButtonText')}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.startButton, styles.mainButton]}
          onPress={() => setShowConfirm(true)}
        >
          <Text style={styles.buttonText}>
            {i18n.t('stopwatchStartButtonText')}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  // Button Styles
  mainButton: {
    borderRadius: 9999,
    padding: 30,
    marginHorizontal: '15%',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  startButton: {
    backgroundColor: '#FF5500',
  },
  stopButton: {
    backgroundColor: '#FF3333',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans-serif-condensed',
  },
  // Stopwatch styles
  stopWatchContainer: {
    // paddingVertical: 16,
    // paddingHorizontal: 48,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 3,
    // borderRadius: 24,
    // marginBottom: 10,
    borderRadius: 9999,
    padding: 28,
    marginHorizontal: '15%',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  stopWatchChar: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  darkContainer: { backgroundColor: '#000', borderColor: '#FF5500' },
  lightContainer: { backgroundColor: '#fff', borderColor: '#00A896' },
  darkChar: { color: '#00A896' },
  lightChar: { color: '#002C7D' },
});
