import React, { useContext, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import i18n, { switchLanguage } from '../../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';
import LanguageButtons from '../components/LanguageButtons';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [lang, setLang] = useState(i18n.locale);

  const { isDarkTheme } = useContext(ThemeContext);

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  return (
    <KeyboardAvoidingView
      behavior='height'
      keyboardVerticalOffset={20}
      enabled='false'
      style={[styles.container, containerStyle]}
    >
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText={i18n.t('signInHeaderText')}
        errorMessage={state.errorMessage}
        submitButtonText={i18n.t('signInBtnText')}
        onSubmit={signin}
      />
      <NavLink text={i18n.t('dontHaveLinkText')} routeName='Signup' />
      <LanguageButtons lang={lang} setLang={setLang} />
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
    paddingBottom: 200,
  },
  lightContainer: { backgroundColor: '#FFFFFF' },
  darkContainer: { backgroundColor: '#1E1E1E' },
  langContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 20,
  },
});

export default SigninScreen;
