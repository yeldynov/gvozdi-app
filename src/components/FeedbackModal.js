import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Text, Input, Textarea } from 'react-native-elements';
import moment from 'moment';

const FeedbackModal = ({
  modalVisible,
  setModalVisible,
  stopwatchTimerRef,
  feedback,
  setFeedback,
  onSave,
}) => {
  const [saving, setSaving] = useState(false);
  function handleSave() {
    setSaving(true);
    onSave().then(() => setSaving(false));
  }

  return (
    <Modal
      animationType='fade'
      transparent
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
            style={styles.input}
            labelStyle={styles.label}
            value={feedback}
            autoFocus
            onChangeText={setFeedback}
            label='Как вы себя чувствуете?'
            placeholder=''
          />
          {!saving ? (
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleSave}
            >
              <Text style={styles.textStyle}>Сохранить</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled
              style={[styles.button, styles.buttonCloseDisabled]}
            >
              <ActivityIndicator size='large' />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default FeedbackModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 40,
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
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'darkgreen',
    padding: 20,
    backgroundColor: '#008C8C',
  },
  buttonCloseDisabled: {
    backgroundColor: 'darkgreen',
    padding: 20,
    backgroundColor: '#9B9B9B',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
  },
  input: {
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
  },
  label: {
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
  },
});
