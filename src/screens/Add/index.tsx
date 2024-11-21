import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import style from './style'; 
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';



const Add = () => {

   


  return (
    <View style={style.container}>
      <Text style={style.header}>Anunciar</Text>
    
      <View style={style.containerCorpo}>      
        <View style={style.containerFoto}>
        <TouchableOpacity style={style.ButtonFoto}>
        <Icon name="photo-camera" size={60} color="#333" />

          <Text style={style.TextFoto}>Adicionar Foto</Text>
        </TouchableOpacity>
      </View> 

   

<Text style = {style.label}>Titulo do anuncio</Text>
<TextInput style= {style.input} placeholder="digite" ></TextInput>
      


<Text style= {style.label}>Descrição</Text>
<TextInput style= {[style.input,style.textArea]}
placeholder='Digite aqui'>
    

</TextInput>
      

      <Text style={style.label}>preço (R$):</Text>
      <TextInput style={style.input} placeholder="Digite o preço"  keyboardType="numeric"/> 
      </View> 
    
       <TouchableOpacity style={style.button}> 
        <Text style ={style.textbutton}>Postar</Text>
         </TouchableOpacity> 



         
         </View>

  );
};

export default Add;
