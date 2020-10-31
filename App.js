import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  StyleSheet, Text, View , TextInput,Image, TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech';
import logo from './logo.png'

export default function App() {

 const [text , setText] = useState ("Digite algo ..");

 function speek(){
   Speech.speak(text,{
     language:  'pt-BR'
   });
 }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source ={logo}></Image>
      <Text style={styles.title}> Leitura e Fala Inteligente</Text>
      <TextInput style={styles.input}
      onChangeText={e => setText(e)}
      placeholder = "Digite Algo ..." 
      >

      </TextInput>
  
      <TouchableOpacity style={styles.Botao} onPress={speek}>
        <Text style={styles.fonte}>Falar</Text> 
        </TouchableOpacity>    
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'75%',
    height:'20%',
    borderWidth:1 ,
    borderColor: '#121212',
    borderRadius:10,
    padding: 1 , 
    margin: 10,
    color: '#000',
    fontSize: 20,
  },
  logo:{
    width:200,
    height: 200,
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical:20,

  },
  Botao :{
    marginBottom:20,
    width:200,
    height:48,
    borderRadius:8,
    backgroundColor:'#40e0d0',
    alignItems:'center',
    justifyContent:'center',
  },
  fonte:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:20,

  },
});
