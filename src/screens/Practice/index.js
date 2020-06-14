import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import apis from '../../utils/axios';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Tab from './components/Tab';
import DetailsBar from './components/DetailsBar';
import ClassDetails from './components/ClassDetails';
import axios from 'axios';

export default ({route: {params}}) => {
  const [practice, setPractice] = useState({
    _id: params._id,
    title: params.title,
    videoUrl: params.videoUrl,
    difficulty: params.difficulty,
    description: '',
    logs: [],
    favoritedBy: [],
    createdAt: new Date(),
  });
  const [userId, setUserId] = useState(null);
  const [activeTab, setActiveTab] = useState('Class Details');

  useEffect(() => {
    getPractice();
    getUserId();
  }, []);

  const getPractice = async () => {
    try {
      const {
        data: {practice},
      } = await apis.getPractice(params._id);
      setPractice(practice);
    } catch (e) {
      console.log('e', e);
    }
  };

  const getUserId = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      setUserId(userId);
    } catch (e) {
      console.log('e', e);
    }
  };

  const makeFavorite = async () => {
    try {
      await apis.favPractice(practice._id);
      setPractice({
        ...practice,
        favoritedBy: [...practice.favoritedBy, userId],
      });
    } catch (e) {
      console.log('e', e);
    }
  };

  const makeUnfavorite = async () => {
    try {
      await apis.unfavPractice(practice._id);
      setPractice({
        ...practice,
        favoritedBy: practice.favoritedBy.filter(id => id !== userId),
      });
    } catch (e) {
      console.log('e', e);
    }
  };

  const onLog = async (data, onDone) => {
    try {
      await apis.logPractice({practiceId: practice._id, ...data});
      await getPractice();
      onDone();
    } catch (e) {
      console.log('e', e);
    }
  };

  const {
    title,
    videoUrl,
    difficulty,
    description,
    logs,
    favoritedBy,
    createdAt,
  } = practice;
  const isFavorite = favoritedBy.includes(userId);
  const date = createdAt ? new Date(createdAt).toISOString().split('T')[0] : '';
  return (
    <ScrollView style={styles.mainContainer}>
      <ImageBackground source={{uri: videoUrl}} style={styles.video}>
        <View style={styles.playIcon}>
          <MaterialCommunityIcons color="white" name="play" size={50} />
        </View>
      </ImageBackground>
      <View style={styles.titleAndStar}>
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcons
          color="red"
          size={40}
          name={isFavorite ? 'star' : 'star-outline'}
          onPress={() => (isFavorite ? makeUnfavorite() : makeFavorite())}
        />
      </View>
      <DetailsBar
        date={date}
        difficulty={difficulty}
        logsLength={logs.length}
      />
      <View style={styles.tabs}>
        <Tab
          tab="Class Details"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab tab="Results" activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
      <ClassDetails
        activeTab={activeTab}
        description={description}
        onLog={onLog}
      />
    </ScrollView>
  );
};
