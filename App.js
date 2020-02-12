import React from 'react';
import Login from './login';
import HomePage from './homePage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class App extends React.Component {

 
  
  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="/"
          component={Login}
          options={{title: 'Welcome'}}
        />

          <Stack.Screen name="home" component={HomePage} options={{title: 'Home'}} />
       
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
