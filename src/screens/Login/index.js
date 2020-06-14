import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import apis from '../../utils/axios';
import styles from './styles';

export default ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(() => {
    (async () => {
      const jwt = await AsyncStorage.getItem('jwt');
      if (jwt) {
        navigation.navigate('Practices');
      }
      setIsLoading(false);
    })();
  }, []);

  const submit = async () => {
    try {
      const {
        data: {jwt, userId},
      } = await apis.login(phoneNumber);
      await AsyncStorage.multiSet([['jwt', jwt], ['userId', userId]]);
      navigation.navigate('Practices');
    } catch (e) {
      console.log('e', e);
    }
  };

  if (isLoading) {
    return <Text>loading...</Text>;
  }
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        value={phoneNumber}
        onChangeText={v => setPhoneNumber(v)}
        keyboardType="phone-pad"
      />
      <TextInput style={styles.textInput} secureTextEntry />
      <TouchableOpacity onPress={submit} style={styles.submit}>
        <Text style={styles.submitTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
