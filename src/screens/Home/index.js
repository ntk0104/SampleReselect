import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Linking } from 'react-native'
import styles from './styles'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    )
  }
}

export default HomeScreen
