import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>

      </View>
    )
  }
}


const styles = StyleSheet.create({

  container : {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  },
});

export default App;
