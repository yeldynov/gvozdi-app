import React, { useContext } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as SessionContext } from '../context/SessionContext';
import Spacer from '../components/Spacer';
import moment from 'moment';
import 'moment/locale/ru';
import Statistics from '../components/Statistics';
import ListItem from '../components/ListItem';
import Title from '../components/Title';

const SessionListScreen = ({ navigation }) => {
  const { state, fetchSessions } = useContext(SessionContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchSessions} />
      <Title>История Гвоздестояний</Title>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SessionDetail', { _id: item._id });
              }}
              style={styles.itemContainer}
            >
              <ListItem item={item} />
            </TouchableOpacity>
          );
        }}
      />

      <Spacer />
    </View>
  );
};

SessionListScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SessionListScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    marginBottom: 60,
    paddingBottom: 20,
  },
  title: {
    paddingTop: 20,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    textAlign: 'center',
  },
  itemContainer: {
    height: 80,
    elevation: 3,
    borderColor: 'gray',
    borderRadius: 3,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
