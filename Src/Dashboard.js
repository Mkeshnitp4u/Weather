import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { SafeAreaView, Text, View } from 'react-native'
import { wetherDetail } from './Redux/Action/weatherAction'
import LottieView from './Component/lottieView'
import GeoLocation from '@react-native-community/geolocation'

const Dashboard = (props) => {
  const { currentWeatherInfo: { weatherDetail, isLoading } } = props

  const [currentLocation, setCurrentLocation] = useState(undefined)
  const [weatherInfo, setWeatherInfo] = useState(weatherDetail)

  const findCoordinates = () => {
    GeoLocation.getCurrentPosition(geo => {
      GeoLocation.stopObserving();
      const { coords: { latitude, longitude } } = geo
      setCurrentLocation({ lat: latitude, lon: longitude })
    }, err => setCurrentLocation({ err: err.message }))
  };


  useEffect(async () => {
    await findCoordinates()
  }, [])

  useEffect(() => {
    if (currentLocation) {
      const param = { ...currentLocation, exclude: 'minutely,hourly' }
      props.wetherDetail({ endPoint: 'onecall', params: param })
    }
  }, [currentLocation])

  useEffect(() => {
    setWeatherInfo(weatherDetail)
  }, [weatherDetail])
  return (

    isLoading ?
      <SafeAreaView style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <LottieView
          style={{ width: 80, height: 80, }}
          sourcePath={require('./Common/Lottie/loader.json')} />
      </SafeAreaView>
      :
      <SafeAreaView
        style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text>Dashboard</Text>
        <Text>Current Location:{JSON.stringify(currentLocation)}</Text>
      </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    currentWeatherInfo: state.weatherReducer
  }
}

export default connect(mapStateToProps, { wetherDetail })(Dashboard);
