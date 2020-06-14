import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    backgroundColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
  },
  titleAndStar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 50,
  },
});
