import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get("window");

class App extends React.Component {
  state = {
    newToDo : "",
  };
  _contollNewToDo = (text) => {
    this.setState({
      newToDo : text
    });
  }

  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>RN-To do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"New To Do"}
            value={newToDo}
            onChangeText={this._contollNewToDo}
            placeholderTextColor={'#999'}
            returnKeyType={"done"}
            autoCorrect={false}
          />
        </View>
      </View>
    );
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
    borderTopRightRadius : 10,
    elevation : 5,
    ...Platform.select({
      ios : {
        shadowColor : 'rgba(50,50,50)',
        shadowOpacity : 0.5,
        shadowRadius : 5,
        shadowOffset:{
          height:-1,
          width : 0
        }
      },
      android : {
        elevation : 3
      }
    })
  },
  input : {
    padding : 20,
    borderBottomColor : '#bbb',
    borderBottomWidth : 1,
    fontSize : 25,
  }
});

export default App;
