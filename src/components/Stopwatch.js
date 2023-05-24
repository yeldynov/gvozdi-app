import React, { useRef, useContext } from 'react';
import { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Text, Input } from 'react-native-elements';
import StopwatchTimer from 'react-native-animated-stopwatch-timer';
import moment from 'moment';
import { Context as SessionContext } from '../context/SessionContext';
import { navigate } from '../utils/navigationRef';
import FeedbackModal from './FeedbackModal';
import ConfirmModal from './CofirmModal';

const Stopwatch = () => {
  const stopwatchTimerRef = useRef(null);
  const { createSession } = useContext(SessionContext);

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

  return (
    <>
      <StopwatchTimer
        ref={stopwatchTimerRef}
        containerStyle={styles.stopWatchContainer}
        textCharStyle={styles.stopWatchChar}
        trailingZeros={2}
      />
      {showConfirm && (
        <ConfirmModal
          isVisible={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={play}
          message='Расслабтесь. Глубоко вдохните. На выдохе, встаньте на гвозди. Первые
          несколько минут могут быть неприятные ощущения в ступнях. Глубоко
          вдыхайте и выдыхайте, чтобы отвлечься. Скоро боль пройдет и начнется
          настоящая практика...'
          confirmButtonMessage='Старт!'
          titleText='Приготовьтесь!'
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
          <Text style={styles.buttonText}>Стоп!</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.startButton, styles.mainButton]}
          onPress={() => setShowConfirm(true)}
        >
          <Text style={styles.buttonText}>Начать!</Text>
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
    padding: 40,
    marginHorizontal: '15%',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  startButton: {
    backgroundColor: 'darkorange',
  },
  stopButton: {
    backgroundColor: '#E06469',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  // Stopwatch styles
  stopWatchContainer: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    backgroundColor: 'darkgray',
    borderColor: 'darkorange',
    borderRadius: 24,
    marginBottom: 10,
  },
  stopWatchChar: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
});
