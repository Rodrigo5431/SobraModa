import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './style'; 
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';



export default function Add() {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Anunciar</Text>
    
      <View style={styles.containerCorpo}>      
        <View style={styles.containerFoto}>
        <TouchableOpacity style={styles.ButtonFoto}>
        <Icon name="photo-camera" size={60} color="#333" />

          <Text style={styles.TextFoto}>Adicionar Foto</Text>
        </TouchableOpacity>
      </View> 

   

<Text style = {styles.label}>Titulo do anuncio</Text>
<TextInput style= {styles.input} placeholder="digite" ></TextInput>


<Text style= {styles.label}>Descrição</Text>
<TextInput style= {[styles.input,styles.textArea]}
placeholder='Digite aqui'>
    

</TextInput>
      

      <Text style={styles.label}>preço (R$):</Text>
      <TextInput style={styles.input} placeholder="Digite o preço"  keyboardType="numeric"/> 
      </View> 
    
      <View >
       <TouchableOpacity style={styles.button}> 
        <Text style ={styles.textbutton}>Postar</Text>
         </TouchableOpacity> 
         </View>



         
         </View>

  );
};


