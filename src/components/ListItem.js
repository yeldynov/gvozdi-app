import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';
import uri from '../../assets/gvozdi-icon.png';

const ListItem = ({ item }) => {
  return (
    <>
      <Image style={styles.thumbnail} source={uri} />
      <View style={styles.metaDataContainer}>
        <View style={styles.metaDataContent}>
          <Text style={styles.feedback}>{item.feedback}</Text>
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
    color: '#444',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
  },
  date: {
    fontSize: 16,
    color: '#888',
    fontWeight: '700',
    fontFamily: 'sans-serif-condensed',
  },
});

export default ListItem;
