import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Botao from './botao/index'

// fazer um input que seta um estado
// fazer um botão q pega o estado do input e mostra na tela

export default function App() {
  const [texto, setTexto] = useState('')
  const [textoTela, setTextoTela] =useState('')
  const [visivel, setVisivel] = useState(false)
  
  return (
    <View style={styles.container}>
      <TextInput 
        onChangeText={(event) => setTexto(event)}
        style={{borderWidth:1, width: 100, paddingHorizontal:4}}
      />     
      <TouchableOpacity
        onPress={()=> setTextoTela(texto)}
        style={{borderWidth:1, width: 100, paddingHorizontal:4, textAlign:'center', marginTop:4}}
      >
        <Text>Botão</Text>
      </TouchableOpacity>

      <Text>{textoTela}</Text>
      
      <TouchableOpacity
        onPress={()=> setVisivel(oldState => !oldState)}
        style={{borderWidth:1, width: 100, paddingHorizontal:4, textAlign:'center', marginTop:4}}
      >
        <Text>Botão Mostrar Texto</Text>
      </TouchableOpacity>

      { visivel && <Text>Olá</Text>}
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


/*
&&
V V = V
V F = F
F V = F
F F = F

||
V V = V
V F = V
F V = V
F F = F


*/