import React, { useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior='height'
      keyboardVerticalOffset={20}
      enabled='false'
      style={styles.container}
    >
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Войти в аккаунт 🚪🚶'
        errorMessage={state.errorMessage}
        submitButtonText='Войти'
        onSubmit={signin}
      />
      <NavLink text='Нет аккаунта? Зарегистрируйтесь!' routeName='Signup' />
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 250,
    // backgroundColor: 'rgba(254, 220, 0,0.2)',
  },
});

export default SigninScreen;
