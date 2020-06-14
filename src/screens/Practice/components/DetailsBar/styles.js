import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  log: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  logCount: {
    color: 'white',
  },
  logTitle: {
    color: 'white',
  },
  difficulty: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  flex: 1,
  difficultyRate: {
    color: 'white',
  },
  difficultyTitle: {
    color: 'white',
  },
  createdAt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createdAtTitle: {
    color: 'white',
  },
});
