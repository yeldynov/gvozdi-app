import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Switch } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import Title from '../components/Title';
import { ThemeContext } from '../context/ThemeContext';

import i18n from '../../i18n/i18n';
import LanguageButtons from '../components/LanguageButtons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  const [lang, setLang] = useState(i18n.locale);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const textStyle = isDarkTheme ? styles.lightText : styles.darkText;

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Spacer>
        <Title>{i18n.t('settingsTitleText')}</Title>
        <Spacer />
        <TouchableOpacity style={styles.button} onPress={signout}>
          <Text style={styles.buttonText}>{i18n.t('signOutBtnText')}</Text>
        </TouchableOpacity>
        <LanguageButtons setLang={setLang} lang={lang} />
        <Spacer />
        <View style={styles.switchContainer}>
          <Text style={[textStyle, styles.langText]}>
            {i18n.t('lightThemeText')}
          </Text>
          <Switch
            trackColor={{ false: '#9b9b9b', true: '#00A896' }}
            thumbColor={isDarkTheme ? '#FF5500' : '#fedc00'}
            onValueChange={toggleTheme}
            value={isDarkTheme}
          />
          <Text style={[textStyle, styles.langText]}>
            {i18n.t('darkThemeText')}
          </Text>
        </View>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  // title: 'Настройки',
  title: '',
  tabBarIcon: <FontAwesome name='gear' size={24} color='white' />,
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
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: '#fff',
  },
  container: {
    flex: 1,
  },
  lightContainer: { backgroundColor: '#FFFFFF' },
  darkContainer: { backgroundColor: '#1E1E1E' },

  switchContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    flexDirection: 'row',
  },
  lightText: { color: '#fff' },
  darkText: { color: '#1e1e1e' },

  langContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 20,
  },
  lightText: { color: '#fff' },
  darkText: { color: '#1e1e1e' },
  langBtn: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  darkBorder: { borderColor: '#000' },
  lightBorder: { borderColor: '#fff' },
  langText: {
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
  },
  activeBtn: {
    backgroundColor: '#FF5500',
  },
});

export default AccountScreen;
