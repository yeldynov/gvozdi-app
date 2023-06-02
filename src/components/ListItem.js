import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';
import uri from '../../assets/icons/icon5.png';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

function cutFeedback(str) {
  if (str.length <= 20) return str;
  else return str.substring(0, 25) + '...';
}

const ListItem = ({ item }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const itemDateStyle = isDarkTheme
    ? styles.darkItemDate
    : styles.lightItemDate;

  return (
    <>
      <Image style={styles.thumbnail} source={uri} />
      <View style={styles.metaDataContainer}>
        <View style={styles.metaDataContent}>
          <Text style={styles.feedback}>{cutFeedback(item.feedback)}</Text>
          <Text style={[styles.date, itemDateStyle]}>
            {moment(item.date).format('DD/MM/YY')}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  metaDataContainer: {
    flex: 1,
  },
  thumbnail: {
    marginLeft: 10,
    resizeMode: 'contain',
    height: 50,
    width: 50,
    opacity: 1,
  },
  metaDataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  feedback: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: '#00A896',
  },
  date: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'sans-serif-condensed',
  },
  darkItemDate: { color: '#fff' },
  lightItemDate: { color: '#9B9B9B' },
});

export default ListItem;
