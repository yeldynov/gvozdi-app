import React from 'react';
import { StyleSheet, View, Alert, Modal, Pressable } from 'react-native';
import { Text, Input } from 'react-native-elements';
import moment from 'moment';

const FeedbackModal = ({
  modalVisible,
  setModalVisible,
  stopwatchTimerRef,
  feedback,
  setFeedback,
  onSave,
}) => {
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
            value={feedback}
            onChangeText={setFeedback}
            label='Как вы себя чувствуете?'
            placeholder=''
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onSave}
          >
            <Text style={styles.textStyle}>Сохранить</Text>
          </Pressable>
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
    borderRadius: 5,
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
});
