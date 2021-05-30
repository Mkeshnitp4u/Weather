import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native'
import { getTime } from '../../Utils'
import { DetailStyle } from './DetailStyle'

const Detail = ({ route }) => {
    const { params: { item } } = route
    const renderItem = (key, value) => {
        return (<View style={DetailStyle.mainContainer}>
            <View>
                <Text style={DetailStyle.keytextStyle}>{key}</Text>
            </View>
            <View>
                <Text style={DetailStyle.valuetextStyle}>{value}</Text>
            </View>
        </View>)
    }
    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
            <ScrollView>
                {renderItem('Sunrise', getTime(item.sunrise))}
                {renderItem('Sunset', getTime(item.sunset))}
                {renderItem('Moonrise', getTime(item.moonrise))}
                {renderItem('Moonset', getTime(item.moonset))}
                {renderItem('Mor. Temp.', `${item.temp['morn']}ºC`)}
                {renderItem('Eve. Temp.', `${item.temp['eve']}ºC`)}
                {renderItem('Night Temp.', `${item.temp['night']}ºC`)}
                {renderItem('Min Temp.', `${item.temp['min']}ºC`)}
                {renderItem('Max Temp.', `${item.temp['max']}ºC`)}
                {renderItem('Pressure', `${item.pressure} hPa`)}
                {renderItem('Humidity', `${item.humidity}%`)}
                {renderItem('Cloud', `${item.clouds}%`)}
                {renderItem('Wind Speed', `${item.wind_speed}m/s`)}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Detail;