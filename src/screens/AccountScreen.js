import React, { useContext } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as SessionContext } from '../context/SessionContext';
import { FontAwesome } from '@expo/vector-icons';
import Statistics from '../components/Statistics';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  const { state } = useContext(SessionContext);

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h4>Настройки Аккаунта</Text>
        <Spacer />
        <Statistics state={state} />
        <Spacer />
        <TouchableOpacity style={styles.button} onPress={signout}>
          <Text style={styles.buttonText}>Сменить Пользователя</Text>
        </TouchableOpacity>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Настройки',
  tabBarIcon: <FontAwesome name='gear' size={24} color='white' />,
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight * 2,
  },
});

export default AccountScreen;
