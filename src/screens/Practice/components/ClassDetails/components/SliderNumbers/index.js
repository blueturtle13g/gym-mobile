import React from 'react';
import {Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles';

export default ({difficulty, setDifficulty}) => (
  <>
    <Text style={styles.title}>How hard was it?</Text>
    <View style={styles.mainContainer}>
      <Slider
        value={difficulty}
        onValueChange={v => setDifficulty(v)}
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        minimumTrackTintColor="red"
        maximumTrackTintColor="white"
        thumbTintColor="red"
      />
      <View style={styles.numbers}>
        <Text style={styles.number}>1</Text>
        <Text style={styles.number}>2</Text>
        <Text style={styles.number}>3</Text>
        <Text style={styles.number}>4</Text>
        <Text style={styles.number}>5</Text>
      </View>
    </View>
  </>
);
