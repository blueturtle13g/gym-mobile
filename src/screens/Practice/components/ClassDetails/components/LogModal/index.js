import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SliderNumbers from '../SliderNumbers';
import Camera from '../Camera';
import styles from './styles';

export default ({isVisible, closeModal, onLog}) => {
  const [comment, setComment] = useState('');
  const [difficulty, setDifficulty] = useState(3);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [picture, setPicture] = useState(false);

  const onCapture = async uri => {
    setPicture(uri);
    setIsCameraOpen(false);
  };

  const submit = () => {
    onLog(
      {
        comment,
        picture: false,
        difficulty,
      },
      closeModal,
    );
  };

  return (
    <Modal
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      isVisible={isVisible}
      style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={110}
        style={styles.content}>
        <View style={styles.header}>
          <Entypo name="hand" color="white" size={30} />
          <Text style={styles.headerTitle}>Nice Work, Lauren!</Text>
          <AntDesign
            name="close"
            color="white"
            size={34}
            style={styles.closeIcon}
            onPress={closeModal}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsCameraOpen(true)}
          style={styles.pictureContainer}>
          {picture ? (
            <Image source={{uri: picture}} style={styles.picture} />
          ) : (
            <>
              <Entypo name="camera" color="white" size={55} />
              <Text style={styles.pictureContainerTitle}>
                Pics or it didn't happen...
              </Text>
            </>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={v => setComment(v)}
          placeholder="Comments..."
          multiline
          placeholderTextColor="grey"
        />
        <SliderNumbers difficulty={difficulty} setDifficulty={setDifficulty} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={submit}
          style={styles.button}>
          <Text style={styles.buttonTitle}>submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {isCameraOpen && <Camera onCapture={onCapture} />}
    </Modal>
  );
};
