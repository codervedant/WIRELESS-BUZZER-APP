import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Buzzer App </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'cyan',
  },
  text: {
    color: 'darkblue',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 20,
  },
});

export default AppHeader;
