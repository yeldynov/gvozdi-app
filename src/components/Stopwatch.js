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

const Stopwatch = () => {
  const stopwatchTimerRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [feedback, setFeedback] = useState('');
  const { createSession } = useContext(SessionContext);

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
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text h2 style={styles.modalText}>
                {moment(stopwatchTimerRef.current?.getSnapshot()).format(
                  'mm:ss:ms'
                )}{' '}
              </Text>
              <Input
                value={feedback}
                onChangeText={setFeedback}
                label='Как вы себя чувствуете?'
                placeholder=''
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={save}
              >
                <Text style={styles.textStyle}>Сохранить</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'darkgreen',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
