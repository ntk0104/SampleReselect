import {
  StyleSheet,
  // Dimensions
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'
// import { colors, constants } from 'path/to/colors'

// const screen = Dimensions.get('window')
// const screenWidth = screen.width
// const screenHeight = screen.height
// const IPHONEX_STATUS_BAR_HEIGHT = 22

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    // width: ,
    // height: ,
    borderWidth: 1,
    padding: 10,
  }
});

export default styles
