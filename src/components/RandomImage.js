import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const RandomImage = ({ customStyles }) => {
  const images = [
    require('../../assets/stopwatch/1.jpg'),
    require('../../assets/stopwatch/2.jpg'),
    require('../../assets/stopwatch/3.jpg'),
    require('../../assets/stopwatch/4.jpg'),
    require('../../assets/stopwatch/5.jpg'),
    require('../../assets/stopwatch/6.jpg'),
    require('../../assets/stopwatch/7.jpg'),
    require('../../assets/stopwatch/8.jpg'),
    require('../../assets/stopwatch/9.jpg'),
    require('../../assets/stopwatch/10.jpg'),
    require('../../assets/stopwatch/11.jpg'),
    require('../../assets/stopwatch/12.jpg'),
    require('../../assets/stopwatch/13.jpg'),
    require('../../assets/stopwatch/14.jpg'),
    require('../../assets/stopwatch/15.jpg'),
    require('../../assets/stopwatch/16.jpg'),
    require('../../assets/stopwatch/17.jpg'),
    require('../../assets/stopwatch/18.jpg'),
    require('../../assets/stopwatch/19.jpg'),
    require('../../assets/stopwatch/20.jpg'),
    require('../../assets/stopwatch/21.jpg'),
    require('../../assets/stopwatch/22.jpg'),
    require('../../assets/stopwatch/23.jpg'),
  ];

  const [randomImage, setRandomImage] = useState(images[0]);

  useEffect(() => {
    getRandomImage();
  }, []);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  };

  return (
    <View>
      <Image source={randomImage} style={[styles.image, customStyles]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: Dimensions.get('window').height / 2.5,
    alignSelf: 'center',
  },
});

export default RandomImage;
