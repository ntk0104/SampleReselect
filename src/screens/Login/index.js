// import _ from 'lodash';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
// import { colors, constants } from 'path/to/colors'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  // componentWillReceiveProps(nextProps) {
  //   const { } = this.props
  // }

  render() {
    // const {  } = this.state
    // const { } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.textStyle} numberOfLines={1}>
          Login Component
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.btnTxt}>Login With Airbus SSO</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login
