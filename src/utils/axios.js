import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const _getJWT = () => AsyncStorage.getItem('jwt');
const instance = axios.create({
  baseURL: 'http://192.168.1.47:3000/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getPractices: async () => {
    const Authorization = await _getJWT();
    return instance.get('practices', {
      headers: {
        Authorization,
      },
    });
  },
  getPractice: async id => {
    const Authorization = await _getJWT();
    return instance.get(`practices/${id}`, {
      headers: {
        Authorization,
      },
    });
  },
  favPractice: async id => {
    const Authorization = await _getJWT();
    return instance({
      method: 'post',
      url: `practices/${id}/favorite`,
      headers: {
        Authorization,
      },
    });
  },
  unfavPractice: async id => {
    const Authorization = await _getJWT();
    return instance({
      method: 'post',
      url: `practices/${id}/unfavorite`,
      headers: {
        Authorization,
      },
    });
  },
  logPractice: async ({practiceId, comment, difficulty, picture}) => {
    const form = new FormData();
    const Authorization = await _getJWT();
    if (picture) {
      form.append('picture', {
        uri: picture,
        name: 'picture',
        type: 'image/jpeg',
      });
    }
    form.append('comment', comment);
    form.append('difficulty', difficulty);
    return instance({
      method: 'post',
      url: `practices/${practiceId}/log`,
      headers: {
        Authorization,
        'Content-Type': 'multipart/form-data',
      },
      data: form,
    });
  },
  login: phoneNumber =>
    instance({
      method: 'post',
      url: 'auth/fake-login',
      data: {
        phoneNumber,
        password: 'something',
      },
    }),
};
