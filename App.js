import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './src/config/store.config'
import RootNavigation from './src/config/route.config'

export default class App extends PureComponent {


  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidStatusBar: {
    backgroundColor: "#000000"
  },
  dropDownContainer: {
    height: 80,
    backgroundColor: 'blue'
  },
  cancelBtnImg: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  defaultContainer: {
    padding: 10,
    paddingTop: 30,
    flexDirection: 'row'
  },
  containerStyle: {
    backgroundColor: 'green',
    alignItems: 'center'
  },
  imgStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});