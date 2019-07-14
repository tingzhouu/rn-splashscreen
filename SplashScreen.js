import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';

class SplashSCreen extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}
      >
        <Image
          source={ require('./splash_screen_image.png') }
          style={{ height: 150, width: 150, resizeMode: 'contain' }}
        />
      </View>
    );
  }
}
export default SplashSCreen;
