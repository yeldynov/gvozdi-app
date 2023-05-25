import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { Text, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { FontAwesome } from '@expo/vector-icons';
import Title from './Title';

const AuthForm = ({
  headerText,
  submitButtonText,
  errorMessage,
  onSubmit,
  isSignUp = false,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [processing, setProcessing] = useState(false);

  function submit() {
    if (isSignUp) {
      if (password !== confirmPassword) {
        setError('Пароли не совпадают.');
        return;
      }
    }
    setProcessing(true);
    onSubmit({ email, password }).then(() => setProcessing(false));
  }

  return (
    <View>
      <Spacer>
        <Title customStyles={{ fontWeight: 'bold' }}>{headerText}</Title>
      </Spacer>
      <Input
        label='Email'
        labelStyle={styles.label}
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
      />
      <Spacer />
      <View style={styles.inputContainer}>
        <Input
          secureTextEntry={!isPasswordVisible}
          labelStyle={styles.label}
          label='Пароль'
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <FontAwesome
            name={isPasswordVisible ? 'eye' : 'eye-slash'}
            size={24}
            color='#9B9B9B'
          />
        </TouchableOpacity>
      </View>

      {isSignUp && (
        <View style={styles.inputContainer}>
          <Input
            secureTextEntry={!isConfirmPasswordVisible}
            label='Подтвердите пароль'
            labelStyle={styles.label}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
          >
            <FontAwesome
              name={isConfirmPasswordVisible ? 'eye' : 'eye-slash'}
              size={24}
              color='#9B9B9B'
            />
          </TouchableOpacity>
        </View>
      )}

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <Spacer>
        {!processing ? (
          <TouchableOpacity style={styles.button} onPress={submit}>
            <Text style={styles.buttonText}>{submitButtonText}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled style={styles.button} onPress={submit}>
            <ActivityIndicator size='large' />
          </TouchableOpacity>
        )}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5500',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FF5500',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans-serif-condensed',
  },
  errorMessage: {
    fontSize: 16,
    color: '#FF3333',
    marginLeft: 15,
    fontFamily: 'sans-serif-condensed',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    flex: 1,
    fontFamily: 'sans-serif-condensed',
  },
  label: {
    fontWeight: 'normal',
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
  },
});

export default AuthForm;
