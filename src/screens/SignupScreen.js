import React, { useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior='height'
      keyboardVerticalOffset={20}
      enabled='false'
      style={styles.container}
    >
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Создать аккаунт 😤'
        errorMessage={state.errorMessage}
        submitButtonText='Регистрация'
        onSubmit={signup}
        isSignUp
      />
      <NavLink text='Уже есть аккаунт? Войти.' routeName='Signin' />
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 250,
    backgroundColor: '#E8F3D6',
  },
});

export default SignupScreen;
