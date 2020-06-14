import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default ({title, videoUrl, difficulty = 0, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.mainContainer}>
      <ImageBackground source={{uri: videoUrl}} style={styles.video}>
        <MaterialCommunityIcons name="play-circle" size={50} color="white" />
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.difficulty}>{difficulty}/5</Text>
      </View>
    </TouchableOpacity>
  );
};
