import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import apis from '../../utils/axios';
import PracticeCard from './components/PracticeCard';

export default ({navigation}) => {
  const [practices, setPractices] = useState([]);
  useEffect(() => {
    (async () => {
      const {
        data: {practices},
      } = await apis.getPractices();
      setPractices(practices);
    })();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {practices.map(practice => (
        <PracticeCard
          onPress={() => navigation.navigate('Practice', {...practice})}
          key={practice._id}
          {...practice}
        />
      ))}
    </ScrollView>
  );
};
