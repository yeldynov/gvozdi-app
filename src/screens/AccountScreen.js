import React, { useContext } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import Title from '../components/Title';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Title>Настройки Аккаунта</Title>
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
    paddingTop: StatusBar.currentHeight,
  },
});

export default AccountScreen;
