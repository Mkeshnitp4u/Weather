import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Lottie from './Component/lottieView'
const Splash=({navigation})=>{
  useEffect(()=>{
  const interval= setTimeout(()=>navigation.navigate('Dashboard'), 100)
  return () => clearInterval(interval);
  }, 
  [])
  return(
   <SafeAreaView style={{justifyContent:'center', flex:1, alignItems:'center', backgroundColor:'brown'}}>
        <Lottie 
        style={{width:200, height:200, }}
        sourcePath={require('./Common/Lottie/weather.json')}
        show
      />
        <Text style={{color:"white", fontSize:30, fontWeight:'bold'}}>
          WEATHER INFO
        </Text>
      </SafeAreaView>
  )
}

export default Splash;
