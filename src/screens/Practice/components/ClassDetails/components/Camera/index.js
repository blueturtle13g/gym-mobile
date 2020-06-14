import React, {useRef} from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {RNCamera} from 'react-native-camera';
import {ANDROID_CAMERA_PERMISSION_OPTIONS} from '../../../../../../utils/constsnts';
import styles from './styles';

export default ({onCapture}) => {
  const camera = useRef(null);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.current.takePictureAsync({});
      onCapture(data.uri);
    }
  };

  return (
    <>
      <RNCamera
        ref={camera}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={ANDROID_CAMERA_PERMISSION_OPTIONS}
      />
      <View style={styles.buttonContainer}>
        <Entypo name="camera" color="white" size={60} onPress={takePicture} />
      </View>
    </>
  );
};
