import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert = () => {
    alert('How are you?');
  };
  render() {
    return (
      <Button
        title="Hi!!"
        color={this.props.color}
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
      <View style={{ marginTop: 100 }}>
        <AnyColorButton color="orange" />
        
        <Text>My First React Component</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <AnyColorButton color="green" />
      </View>
     </View> 
    );
  }
  
}
