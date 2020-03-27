/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'

import HomeScreen from '../screens/Home'
import LoginScreen from '../screens/Login'

const AppStack = createStackNavigator(
  {
    // Home: {screen: HomeScreen, path: 'Home/'},
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Home: { screen: AppStack, path: 'Home/' },
    Login: { screen: LoginScreen, path: '/' }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
)

export default () => {
  const AppContainer = createAppContainer(AppNavigator)
  return <AppContainer />
}
