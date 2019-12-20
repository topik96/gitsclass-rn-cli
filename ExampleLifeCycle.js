import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './ExampleStyle'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Topik Mujianto',
    };
  }

  UNSAFE_componentWillMount = () => {
    console.log('COMPONENT WILL MOUNT');
  };

  render = () => {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={require('./Images/EXAMPLE.png')}/>
          <Text style={styles.defaultText}>{this.state.name}</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.setState({name: 'Zamaludin Abdulah'})}>
            <Text style={{fontSize: 20}}>Change name</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  componentDidMount = () => {
    console.log('COMPONENT DID MOUNT');
  };

  componentWillUnmount = () => {
    console.log('COMPONENT WILL UNMOUNT');
  };

  shouldComponentUpdate = () => {
    return true;
  };

  UNSAFE_componentWillUpdate = () => {
    console.log('COMPONENT WILL UPDATE');
  };

  componentDidUpdate = () => {
    console.log('COMPONENT DID UPDATE');
  };
}
