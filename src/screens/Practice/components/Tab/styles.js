import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tab: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  tabTitle: {
    color: 'white',
    fontSize: 17,
    paddingBottom: 5,
  },
  activeTab: {
    color: 'red',
    borderBottomColor: 'red',
  },
});
