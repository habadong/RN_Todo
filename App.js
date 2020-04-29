import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>RN-To do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#F23657',
    alignItems : 'center',
  
  },
  title : {
    color : 'white',
    fontSize : 30,
    marginTop : 50,
    fontWeight : '200',
    marginBottom : 30
  },
  card : {
    backgroundColor : 'white',
    flex : 1,
    width : width - 25,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10
  }
});

export default App;
