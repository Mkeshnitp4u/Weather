
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import Splash from './Splash'
import Dashboard from './Dashboard'
import Detail from './Screen/Detail'
import store from './Redux/Store'


const Stack = createStackNavigator();

const Entrypoint = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
          <Stack.Screen 
          options={{
            title:'Weather Info',
            headerStyle: {
              backgroundColor: '#E6B0AA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25
            },
            headerLeft: () => {return null},            
            headerTitleAlign:'center'
          }}
          name="Dashboard" component={Dashboard} />
          <Stack.Screen 
           options={{
            headerStyle: {
              backgroundColor: '#E6B0AA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25
            },
            headerTitleAlign:'center'
          }}
          name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Entrypoint;