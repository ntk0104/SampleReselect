import _ from 'lodash';
import React from 'react';
// import { colors, constants } from 'path/to/colors'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import ComponentCounter from './ComponentCounter'
import ListPostComponent from './ComponentListPost'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
    // const {} = this.props
  }


  render() {
    // const {  } = this.state
    // const { } = this.props
    return (
      <View style={{flex: 1}}>
        <Text numberOfLines={1}>Main</Text>
        <ComponentCounter /> 
        <ListPostComponent />
      </View>
    );
  }
}

export default Main
