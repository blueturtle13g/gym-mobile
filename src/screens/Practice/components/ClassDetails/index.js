import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogModal from './components/LogModal';
import styles from './styles';

export default ({description, onLog, activeTab}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return activeTab === 'Class Details' ? (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsModalVisible(true)}
        style={styles.button}>
        <MaterialCommunityIcons name="checkbox-marked-outline" size={25} />
        <Text style={styles.buttonTitle}>Log Result</Text>
      </TouchableOpacity>
      <LogModal
        onLog={onLog}
        isVisible={isModalVisible}
        closeModal={() => setIsModalVisible(false)}
      />
    </View>
  ) : null;
};
