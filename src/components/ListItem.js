import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';
import uri from '../../assets/icons/icon5.png';

function cutFeedback(str) {
  if (str.length <= 20) return str;
  else return str.substring(0, 25) + '...';
}

const ListItem = ({ item }) => {
  return (
    <>
      <Image style={styles.thumbnail} source={uri} />
      <View style={styles.metaDataContainer}>
        <View style={styles.metaDataContent}>
          <Text style={styles.feedback}>{cutFeedback(item.feedback)}</Text>
          <Text style={styles.date}>
            {moment(item.date).format('MMM Do YY')}
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
    opacity: 0.5,
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
    color: '#9B9B9B',
    fontWeight: '700',
    fontFamily: 'sans-serif-condensed',
  },
});

export default ListItem;
