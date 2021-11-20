import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';

const Botao = ({label, setLabel}) => {
  return (
  <View>
    <TouchableOpacity style={{
      backgroundColor:'blue',
      color: '#fff',
      height: 30,
      width: 100,
      borderRadius:5,
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      marginTop:8,
    }}
    onPress={()=>setLabel('Hello World')}
    >
      <Text style={{color:'#fff'}}>{label}</Text>
    </TouchableOpacity>

  </View>
  );
}

export default Botao;