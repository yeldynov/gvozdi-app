import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

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

  function submit() {
    if (isSignUp) {
      if (password !== confirmPassword) {
        setError('Пароли не совпадают.');
        return;
      }
    }

    onSubmit({ email, password });
  }

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label='Пароль'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />

      {isSignUp && (
        <Input
          secureTextEntry
          label='Подтвердите пароль'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize='none'
          autoCorrect={false}
        />
      )}

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <Spacer>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>{submitButtonText}</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkorange',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'darkorange',
  },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
});

export default AuthForm;
