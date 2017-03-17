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
  TouchableHighlight
} from 'react-native';

const routes = [
  {title: 'Scene1', index: 0, passProps: {}},
  {title: 'Scene2', index: 1, passProps: {}},
];

export default class W1ExeHWNavigator extends Component {
  render() {

  return (
    <Navigator
      initialRoute={routes[0]}
      renderScene={this._renderScene.bind(this)}
      style={{padding: 100}}
    />
  );
}

_renderScene(route, navigator) {
    switch (route.index) {
      case 0:
        return (
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(
                {
                passProps: {movieId: '<set value here>'},
                index: 1
              });
            } else {
              navigator.pop();
            }
          }}>

          <View>
            <Text>Hello {route.title}!</Text>
          </View>
          </TouchableHighlight>
        );
        break;
      case 1:
        return (
            <View>
              <DetailPage dataMovieId={route.passProps.movieId} />
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
