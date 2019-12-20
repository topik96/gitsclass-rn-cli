import {StyleSheet, Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        backgroundColor: '#ecf0f1',
      },
      android: {
        backgroundColor: '#bdc3c7',
      },
    }),
  },
  titleButton: {
    fontWeight: 'bold',
    color: 'white',
  },
  containerTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#2c3e50',
    width: width / 2,
    paddingBottom: 8,
    marginBottom: 64,
  },
  containerButtonAuth: (backgroundColor = '#2ecc71') => {
    return {
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      borderRadius: 4,
      width: width / 2,
      height: 40,
      marginBottom: 8,
    };
  },
});
