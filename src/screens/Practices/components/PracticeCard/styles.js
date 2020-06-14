import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    width: '90%',
    marginTop: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    overflow: 'hidden',
  },
  video: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  difficulty: {
    color: 'white',
  },
});
