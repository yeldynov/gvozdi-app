import React, { useContext } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h4>Настройки Аккаунта</Text>
        <Spacer />
        <Button title='Сменить пользователя' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight * 2,
  },
});

export default AccountScreen;
