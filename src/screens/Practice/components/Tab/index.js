import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default ({setActiveTab, activeTab, tab}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setActiveTab(tab)}
      style={[styles.tab, activeTab === tab && styles.activeTab]}>
      <Text style={[styles.tabTitle, activeTab === tab && styles.activeTab]}>
        {tab}
      </Text>
    </TouchableOpacity>
  );
};
