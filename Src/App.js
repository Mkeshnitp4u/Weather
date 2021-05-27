import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Lottie from './Component/lottieView'
const App=()=>{
  const [splash, setSplash]= useState(true)
  useEffect(()=>{
  setTimeout(()=>setSplash(false), 1500)

  }, [])
  return(
    splash ? (<SafeAreaView style={{justifyContent:'center', flex:1, alignItems:'center', backgroundColor:'brown'}}>
        <Lottie 
        style={{width:200, height:200, }}
        sourcePath={require('./Common/Lottie/weather.json')}
        show
      />
        <Text style={{color:"white", fontSize:30, fontWeight:'bold'}}>
          WEATHER INFO
        </Text>
      </SafeAreaView>) :

  <SafeAreaView style={{justifyContent:'center', flex:1, alignItems:'center'}}>
    <Text>Home Page</Text>
  </SafeAreaView>

  )
}

export default App;
