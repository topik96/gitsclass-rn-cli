import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView,
  Button,
} from 'react-native';
import styles from './LoginScreenStyle';

class LoginScreen extends React.Component {
  render() {
    console.log('test');
    return (
      // <SafeAreaView style={styles.safeAreaView}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection:'row'}}>
          <View style={Style.box1}>
            <Text>box 2</Text>
          </View>
          <View style={Style.box2}>
            <Text>box 1</Text>
          </View>
          <View />
        </View>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  box1: {
    flex: 2,
    backgroundColor: 'red',
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default LoginScreen;
