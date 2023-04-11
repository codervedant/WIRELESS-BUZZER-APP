import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class MagentaButton extends Component {
  render() {
    return <Button color="magenta" title="Click Here!!"></Button>;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 50, width: "50%" }}>
        <MagentaButton/>
        <Text>My first App</Text>
      </View>
    );
  }
}
