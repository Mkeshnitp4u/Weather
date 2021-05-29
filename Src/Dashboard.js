import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { SafeAreaView, Text, View } from 'react-native'
import { wetherDetail } from './Redux/Action/weatherAction'
import LottieView from './Component/lottieView'

const Dashboard = (props) => {
  const { currentWeatherInfo: { weatherDetail, isLoading } } = props


  const [weatherInfo, setWeatherInfo] = useState(weatherDetail)
  useEffect(() => {
    props.wetherDetail({ endPoint: 'weather', params: { lat: "25.612677", lon: "85.158875" } })
  }, [])
  useEffect(() => setWeatherInfo(weatherDetail), [weatherDetail])
  return (

    isLoading ?
      <SafeAreaView style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <LottieView
          style={{ width: 80, height: 80, }}
          sourcePath={require('./Common/Lottie/loader.json')} />
      </SafeAreaView>
      : <SafeAreaView
        style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text>Dashboard</Text>
      </SafeAreaView>

  );
};

const mapStateToProps = (state) => {
  return {
    currentWeatherInfo: state.weatherReducer
  }
}

export default connect(mapStateToProps, { wetherDetail })(Dashboard);
