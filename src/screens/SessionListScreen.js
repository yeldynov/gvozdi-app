import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  StatusBar,
  ActivityIndicator,
  Text,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as SessionContext } from '../context/SessionContext';
import Spacer from '../components/Spacer';
import ListItem from '../components/ListItem';
import Title from '../components/Title';
import 'moment/locale/ru';

const SessionListScreen = ({ navigation }) => {
  const { state, fetchSessions } = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSessions().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (state.length < 1 && !isLoading) {
    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={fetchSessions} />
        <Title>История Гвоздестояний</Title>
        <Text style={styles.text}>
          История чиста. Давайте встанем на гвозди...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchSessions} />
      <Title>История Гвоздестояний</Title>
      {isLoading ? (
        <View>
          <ActivityIndicator size='large' color='#FF5500' />
        </View>
      ) : (
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
      )}

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
    paddingTop: StatusBar.currentHeight,
    marginBottom: 60,
    paddingBottom: 20,
  },
  title: {
    paddingTop: 20,
    marginBottom: 10,
    color: '#002C7D',
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    textAlign: 'center',
  },
  itemContainer: {
    height: 80,
    elevation: 3,
    borderColor: '#9B9B9B',
    borderRadius: 3,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontStyle: 'italic',
    marginTop: 30,
    marginHorizontal: 30,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    color: '#9B9B9B',
  },
});
