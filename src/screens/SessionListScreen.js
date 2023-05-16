import React, { useContext } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Text } from 'react-native-elements';
import { Context as SessionContext } from '../context/SessionContext';
import Spacer from '../components/Spacer';
import moment from 'moment';
import 'moment/locale/ru';
import Statistics from '../components/Statistics';

const SessionListScreen = ({ navigation }) => {
  const { state, fetchSessions } = useContext(SessionContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchSessions} />
      {/* <Statistics state={state} /> */}
      <Text style={styles.title} h3>
        История Гвоздестояний
      </Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SessionDetail', { _id: item._id });
              }}
            >
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.feedback}</ListItem.Title>
                  <ListItem.Subtitle>
                    {moment(item.date).format('MMM Do YY')}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
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
  },
  title: {
    paddingLeft: 20,
    paddingTop: 20,
    color: 'darkgrey',
  },
});
