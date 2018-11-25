import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import { AppLoading, Asset, Font, Icon } from 'expo';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#0E7BF7",
    height: Constants.statusBarHeight,
  },

  // rest of the styles
});
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
  
        return (
          <View style={styles.container}>
          <View style={styles.statusBar} />
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
          {/* <AppNavigator /> */}
        </View>
      );
    
  }

}


