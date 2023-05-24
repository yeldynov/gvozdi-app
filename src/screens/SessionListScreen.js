import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  StatusBar,
  ActivityIndicator,
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

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchSessions} />
      <Title>История Гвоздестояний</Title>
      {isLoading ? (
        <View>
          <ActivityIndicator size='large' color='orange' />
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
