import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Lottie from './Component/lottieView'
import { SplashStyle } from './SplashStyle'
const Splash = ({ navigation }) => {
  useEffect(() => {
    const interval = setTimeout(() => navigation.navigate('Dashboard'), 100)
    return () => clearInterval(interval);
  },
    [])
  return (
    <View style={SplashStyle.mainContainer}>
      <Lottie
        style={SplashStyle.lottieView}
        sourcePath={require('./Common/Lottie/weather.json')}
        show
      />
      <Text style={SplashStyle.textStyle}>
        WEATHER INFO
        </Text>
    </View>
  )
}

export default Splash;
