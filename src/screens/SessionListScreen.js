import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as SessionContext } from '../context/SessionContext';
import Spacer from '../components/Spacer';
import ListItem from '../components/ListItem';
import Title from '../components/Title';
import i18n from '../../i18n/i18n';
import { ThemeContext } from '../context/ThemeContext';

const SessionListScreen = ({ navigation }) => {
  const { state, fetchSessions } = useContext(SessionContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSessions().then(() => {
      setIsLoading(false);
    });
  }, []);

  const containerStyle = isDarkTheme
    ? styles.darkContainer
    : styles.lightContainer;

  const itemContainerStyle = isDarkTheme
    ? styles.darkItemContainer
    : styles.lightItemContainer;

  if (state.length < 1 && !isLoading) {
    return (
      <View style={[styles.container, containerStyle]}>
        <NavigationEvents onWillFocus={fetchSessions} />
        <Title>{i18n.t('historyTitleText')}</Title>
        <Text style={styles.text}>{i18n.t('cleanHistoryText')}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <NavigationEvents onWillFocus={fetchSessions} />
      <Title>{i18n.t('historyTitleText')}</Title>
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
                style={[styles.itemContainer, itemContainerStyle]}
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
    flex: 1,
  },
  lightContainer: { backgroundColor: '#FFFFFF' },
  darkContainer: { backgroundColor: '#1E1E1E' },
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
    marginVertical: 3,
    alignItems: 'center',
  },
  lightItemContainer: { backgroundColor: '#FFFFFF' },
  darkItemContainer: { backgroundColor: '#333333' },
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
