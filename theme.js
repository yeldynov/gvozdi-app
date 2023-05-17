import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
  });
};

loadFonts();

const theme = {
  fontFamily: 'OpenSans',
};

export default theme;
