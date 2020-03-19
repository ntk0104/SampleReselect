import _ from 'lodash';
import React from 'react';
// import { colors, constants } from 'path/to/colors'
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'
//import {
//  
//} from 'path/to/selectors'
//import {
//  
//} from 'path/to/actions'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { increaseCounter } from '../../../redux_sagas/global/global.actions'

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log('%c%s', 'color: #ec0202; background: yellow; font-size: 10px', JSON.stringify(this.props, null, 2))
    
  }

  componentWillReceiveProps(nextProps){
    // const {} = this.props
  }


  render() {
    // const {  } = this.state
    // const { } = this.props
    console.log('%c%s', 'color: #C19ED0; background: yellow; font-size: 10px', JSON.stringify(`[RENDER] ${this.constructor.name}`, null, 2))
    return (
      <View style={{flex: 1, flexDirection: 'row', borderWidth: 1, justifyContent: 'space-around'}}>
        <Text numberOfLines={1}>Component Counter: {this.props.counter}</Text>
        <TouchableOpacity activeOpacity={0.7}  onPress={() => this.props.increaseCounter()}>
          <Text >Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
  
// });

const mapStateToProps = (state) => {
 return {
  counter: state.globalReducer.counter
 }
}

// const mapDispatchToProps = dispatch => ({
  
// });

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    increaseCounter
  }, dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);