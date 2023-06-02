import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { switchLanguage } from '../../i18n/i18n';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const LanguageButtons = ({ lang, setLang }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const borderStyle = isDarkTheme ? styles.lightBorder : styles.darkBorder;
  const textStyle = isDarkTheme ? styles.lightText : styles.darkText;

  return (
    <View style={styles.langContainer}>
      <TouchableOpacity
        style={[borderStyle, styles.langBtn, lang === 'ru' && styles.activeBtn]}
        onPress={() => switchLanguage('ru', setLang)}
      >
        <Text style={[styles.langText, textStyle]}>РУС</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[borderStyle, styles.langBtn, lang === 'uk' && styles.activeBtn]}
        onPress={() => switchLanguage('uk', setLang)}
      >
        <Text style={[styles.langText, textStyle]}>УКР</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[borderStyle, styles.langBtn, lang === 'en' && styles.activeBtn]}
        onPress={() => switchLanguage('en', setLang)}
      >
        <Text style={[styles.langText, textStyle]}>ENG</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageButtons;

const styles = StyleSheet.create({
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
