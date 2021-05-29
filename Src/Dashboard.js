import React from 'react';
import { connect } from "react-redux";
import { SafeAreaView, Text } from 'react-native'

const Dashboard = (props) => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    currentWeatherInfo: state.weatherReducer
  }
}


export default connect(mapStateToProps)(Dashboard);
