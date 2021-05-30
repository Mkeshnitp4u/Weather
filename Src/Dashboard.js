import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { wetherDetail } from './Redux/Action/weatherAction'
import LottieView from './Component/lottieView'
import GeoLocation from '@react-native-community/geolocation'
import { getDay, getDate } from './Utils'
import { DashboardStyle } from './DashboardStyle'

const Dashboard = (props) => {
  const { navigation, currentWeatherInfo: { weatherDetail, isLoading, error } } = props

  const [currentLocation, setCurrentLocation] = useState(undefined)
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState(weatherDetail)
  const [dailyWeatherInfo, setDailyWeatherInfo] = useState([])
  const [retry, setRetry] = useState(false)

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
      const param = { ...currentLocation, exclude: 'minutely,hourly', units: "metric" }
      props.wetherDetail({ endPoint: 'onecall', params: param })
      setRetry(false)
    }
  }, [currentLocation, retry])

  const showError = () => {
    return (
      <View style={DashboardStyle.errorContainer}>
        <Text style={DashboardStyle.textStyle}>Something Went Wrong at our End</Text>
        <TouchableOpacity onPress={() => setRetry(true)} style={DashboardStyle.retryButton} >
          <Text>RETRY</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const showLoader = () => {
    return (
      <SafeAreaView style={DashboardStyle.loaderViewStyle}>
        <LottieView
          style={DashboardStyle.lottieViewStyle}
          sourcePath={require('./Common/Lottie/loader.json')} />
      </SafeAreaView>
    )
  }

  useEffect(() => {
    if (weatherDetail) {
      const { current, daily } = weatherDetail
      setDailyWeatherInfo(daily)
      setCurrentWeatherInfo(current)
    }
  }, [weatherDetail])

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { item })}
      style={DashboardStyle.buttonStyle}>
      <View style={DashboardStyle.listViewStyle}>
        <View>
          <Text style={DashboardStyle.textStyle}>{getDay(item.dt)}</Text>
          <Text>{getDate(item.dt)}</Text>
        </View>
        <View>
          <Text style={DashboardStyle.textStyle}>ºC</Text>
          <Text>{item?.temp?.day}</Text>
        </View>
      </View>
    </TouchableOpacity>

  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };

  const showRender = () => {
    return (
      error ?
        showError()
        :
        <SafeAreaView
          style={DashboardStyle.mainContainer}>
          <View style={DashboardStyle.cardContainer}>
            <View style={DashboardStyle.cardView}>
              <Text style={DashboardStyle.celciusText}>ºC</Text>
              <Text style={DashboardStyle.textStyle}>{currentWeatherInfo?.temp}</Text>
            </View>
          </View>
          <View style={DashboardStyle.listStyle}>
            <FlatList
              data={dailyWeatherInfo}
              renderItem={renderItem}
              keyExtractor={(item) => item.dt}
            />
          </View>
        </SafeAreaView>
    )
  }

  return (
    isLoading ?
      showLoader() :
      showRender()
  );
};

const mapStateToProps = (state) => {
  return {
    currentWeatherInfo: state.weatherReducer
  }
}

export default connect(mapStateToProps, { wetherDetail })(Dashboard);
