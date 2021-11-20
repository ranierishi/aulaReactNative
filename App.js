import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Botao from './botao/index'

export default function App() {
  const [text, setText] = useState('Hello World')
  return (
    <View style={styles.container}>  
      <View style={{backgroundColor:'#a5c'}}>
        <Text>{text}</Text>
      </View>    
      <Botao label={text} setLabel={setText}></Botao>
      <Text>Open up App.js to start working on your app! 
        <Text style={{color:'blue', fontSize:20, fontWeight:'bold'}}>Outro Texto</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outroTexto:{
    color: 'blue',
  }
});
