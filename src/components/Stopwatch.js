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

const Stopwatch = () => {
  const stopwatchTimerRef = useRef(null);
  const { createSession } = useContext(SessionContext);

  const [isCounting, setIsCounting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Methods to control the stopwatch
  function play() {
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
          <Text style={styles.buttonText}>Слезть!</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.startButton, styles.mainButton]}
          onPress={play}
        >
          <Text style={styles.buttonText}>Встать!</Text>
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
    marginTop: 40,
  },
  startButton: {
    backgroundColor: 'darkorange',
  },
  stopButton: {
    backgroundColor: 'lightblue',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  // Modal styles

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
