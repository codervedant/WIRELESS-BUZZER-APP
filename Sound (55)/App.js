import * as React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';


class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return <View><TouchableOpacity style = {{backgroundColor: 'cyan',
     marginLeft: 100, 
     borderWidth: 1,
     alignItems: 'center',
     justifyContent: 'center',
     width: 200,
     height: 200,
     borderRadius: 200
}} onPress = {this.playSound}>
    <Text style = {{fontWeight: "bold", fontSize: 20, color: 'red'}}>Press Me
    </Text>
    </TouchableOpacity>

   <TouchableOpacity style = {{backgroundColor: 'magenta',
     marginLeft: 50
   }} onPress = {this.playSound}>
   <Text>Click Here!!</Text>
   </TouchableOpacity>
    </View>
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <SoundButton />
      </View>
    );
  }
}
