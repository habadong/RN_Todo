import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const { width , height } = Dimensions.get('window');

class ToDo extends Component {
  state = {
      isEditing : false,
  };

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity>
              <View style={styles.circle}></View>
          </TouchableOpacity>
        <Text style={styles.text}> Hello I'm ToDo </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        width : width -50,
        borderBottomColor : '#bbb',
        borderBottomWidth : StyleSheet.hairlineWidth,
        flexDirection : 'row',
        alignItems : 'center'
    },
    circle : {
        width : 30,
        height : 30,
        borderRadius : 15,
        borderColor : 'blue',
        borderWidth : 3,
        marginRight : 20,
    },
    text : {
        fontWeight : '600',
        fontSize : 20,
        marginVertical : 20,

    }
})

export default ToDo;
