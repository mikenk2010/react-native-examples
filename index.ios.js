/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TextInput,
  Button
} from 'react-native';

const routes = [
  {title: 'Scene1', index: 0, passProps: {}},
  {title: 'Scene2', index: 1, passProps: {}},
];

export default class W1ExeHWNavigator extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputtext : ''
    }
  }
  render() {
  return (
    <Navigator
      initialRoute={routes[0]}
      renderScene={this._renderScene.bind(this)}
      style={{padding: 100}}
    />
  );
}

sendTextValue(){
  navigator.push({
    passProps: {
      movieId: this.state.inputtext
    },
    index: 1
  })
}

_renderScene(route, navigator) {
    switch (route.index) {
      case 0:
        return (
          <View>
            <TextInput
               style={{height: 40, borderColor: 'gray', borderWidth: 1}}
               onChangeText={(inputtext) => this.setState({inputtext})}
               value={this.state.inputtext}
             />

             <Button onPress={() =>
               {
                 navigator.push({
                   passProps: {
                     movieId: this.state.inputtext
                   },
                   index: 1
                 })
               }
             }
             title="Send" />
          </View>
        );
        break;
      case 1:
        return (
            <View>
              <DetailPage dataMovieId={route.passProps.movieId} navigator={navigator} />
            </View>
        );
        break;
    }
  }

}
export class DetailPage extends Component{
  render(){
    return(
      <View>
        <Text>Screen detail</Text>
        <Text>Value from 1st screen: {this.props.dataMovieId}</Text>
        <Button onPress={() =>
          {
            this.props.navigator.pop({
              index: 0
            })
          }
        }
        title="Back" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('W1ExeHWNavigator', () => W1ExeHWNavigator);
