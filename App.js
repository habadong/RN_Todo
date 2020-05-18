import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import ToDo from './ToDo';
import uuid from 'uuid';
import i18n from './src/i18n/i18n';

const {height, width} = Dimensions.get('window');

class App extends React.Component {
  state = {
    newToDo: '',
    loadedToDos: false,
    toDos: {},
  };

  _controllNewToDo = (text) => {
    this.setState({
      newToDo: text,
    });
  };
  _addToDo = () => {
    const {newToDo} = this.state;
    if (newToDo !== '') {
      this.setState((prevState) => {
        const ID = uuid();
        const newToDoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text: newToDo,
            createdAt: Date.now(),
          },
        };
        const newState = {
          ...prevState,
          newToDo: '',
          toDos: {
            ...prevState.toDos,
            ...newToDoObject,
          },
        };
        return {...newState};
      });
    }
  };

  changeLanguage = (language, component) => {
    i18n.locale = language;
    component.forceUpdate();
  };

  render() {
    const {newToDo, loadedToDos, toDos} = this.state;
    console.log(toDos);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>{i18n.t('Title')}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.changeLanguage('ko', this)}></TouchableOpacity>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={'New To Do'}
            value={newToDo}
            onChangeText={this._controllNewToDo}
            placeholderTextColor={'#999'}
            returnKeyType={'done'}
            autoCorrect={false}
            onSubmitEditing={this._addToDo}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            {Object.values(toDos).map((toDo) => (
              <ToDo Key={toDo.id} {...toDo} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#2E9AFE',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(50,50,50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 25,
  },
  toDos: {
    alignItems: 'center',
  },
});

export default App;
