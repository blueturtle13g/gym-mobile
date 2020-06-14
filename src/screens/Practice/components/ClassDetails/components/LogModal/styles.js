import {StyleSheet} from 'react-native';
import colors from '../../../../../../utils/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    height: '80%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.black1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    marginLeft: 5,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
  },
  pictureContainer: {
    width: '100%',
    height: 170,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  picture: {
    width: '100%',
    height: '100%',
  },
  pictureContainerTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    width: '70%',
    minHeight: 105,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  button: {
    width: '80%',
    height: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 5,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
});
