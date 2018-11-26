import React from 'react';
import { Constants } from 'expo';

import { StyleSheet, Text, View } from 'react-native';
import Navigator from "./navigation/AppNavigation" 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop : 19,
  },
  
  statusBar: {
    backgroundColor: "#0E7BF7",
    height: Constants.statusBarHeight,
  },
  // rest of the styles
});

export default class App extends React.Component {
  render() {
    return (
      // <View>
      <View style={styles.container}>
      <View style={styles.statusBar} />

        <Navigator/>
      </View>
     

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop : 19,
//   },
// });

