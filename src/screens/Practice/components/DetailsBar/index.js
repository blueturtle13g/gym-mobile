import React from 'react';
import {Text, View, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default ({logsLength, difficulty, date}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.log}>
        <MaterialCommunityIcons size={30} name="calendar-check" color="red" />
        <View style={styles.logText}>
          <Text style={styles.logCount}>{logsLength}</Text>
          <Text style={styles.logTitle}>Logs</Text>
        </View>
      </View>
      <View style={styles.difficulty}>
        <Text style={styles.difficultyRate}>{difficulty}/5</Text>
        <Text style={styles.difficultyTitle}>Difficulty</Text>
      </View>
      <View style={styles.createdAt}>
        <Text style={styles.createdAtTitle}>{date}</Text>
      </View>
    </View>
  );
};
