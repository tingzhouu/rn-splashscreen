import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class SplashSCreen extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}
      >
        <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={{ color: 'white' }}
        />
        <Image
          source={ require('./splash_screen_image.png') }
          style={{ height: 150, width: 150, resizeMode: 'contain' }}
        />
      </View>
    );
  }
}
export default SplashSCreen;
