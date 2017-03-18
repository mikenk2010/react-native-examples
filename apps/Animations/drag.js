import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  ScrollView,
  Image,
  LayoutAnimation
} from 'react-native';

export default class Movie extends Component{
  constructor() {
     super();
     this.state = {
       height: 200,
       line : 4,
       marginScroll: 500
     }
  }

  clickToOpen(){
    var height = this.state.height;
    var line = this.state.line;
    var marginScroll = this.state.marginScroll;
    if(height == 200){
      height = 50;
      line = 0
      marginScroll = 100
    }else{
      height = 200;
      line = 4
      marginScroll = 500
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      height,
      line,
      marginScroll
    })
  }

  render(){
    var height = this.state.height;
    var line = this.state.line; // 0: will be showed all lines
    var marginScroll = this.state.marginScroll;
    return(
      <View style={[styles.container,{marginTop: marginScroll}]}>
        <ScrollView
          style={{}}>
            <TouchableOpacity onPress={() => this.clickToOpen()}>
              <View style={[styles.page, {width:200, backgroundColor:'yellow'}]}>
                <Text style={styles.text} numberOfLines={line}>
                  The University of Washington took an ambitious step today to assert its leadership in computer science education,
                  research and entrepreneurial innovation with the establishment of the Paul G. Allen School of Computer Science & Engineering.
                  The Board of Regents voted Thursday to name the school after Allen — the internationally renowned entrepreneur,
                  philanthropist and computing pioneer — in recognition of his longstanding support for the mission of the University and CSE.
                  A $50 million endowment for the new school will propel the UW to the forefront of computer science education and innovation for generations to come.
                </Text>
              </View>
            </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column-reverse',
    flex: 1
  },
  page: {
    alignItems: 'flex-end',
    flexDirection: 'column-reverse'
  }
})
