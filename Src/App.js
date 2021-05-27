import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Lottie from './Component/lottieView'
const App=()=>{
  return(
      <SafeAreaView style={{justifyContent:'center', flex:1, alignItems:'center', backgroundColor:'blue'}}>
        <Lottie 
        style={{width:200, height:200, }}
        sourcePath={require('./Common/Lottie/weather.json')}
        show
      />
      </SafeAreaView>
  )
}

export default App;
