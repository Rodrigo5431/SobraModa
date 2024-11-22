import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

export const NoImplements = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela não Implementada</Text>
      <Image
      source={require('../../assets/NoImp.png')}
      resizeMode='contain'
      style={styles.image}
      />
    </View>
  )
}
