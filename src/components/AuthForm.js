import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { FontAwesome } from '@expo/vector-icons';

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
      <View style={styles.inputContainer}>
        <Input
          secureTextEntry={!isPasswordVisible}
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
            color='gray'
          />
        </TouchableOpacity>
      </View>

      {isSignUp && (
        <View style={styles.inputContainer}>
          <Input
            secureTextEntry={!isConfirmPasswordVisible}
            label='Подтвердите пароль'
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
              color='gray'
            />
          </TouchableOpacity>
        </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    flex: 1,
  },
});

export default AuthForm;
