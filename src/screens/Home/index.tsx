import React from 'react';
import { View, Image, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import style from './style';
import { StatusBar } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';




const Home = () => {

  interface Produto {
    id: string;
    image: any;
    title: string;
  }
  
  const produtosvertical: Produto[] = [
    { id: '1', image: require('../../../assets/alfaiataria.jpg'),title: 'Alfaiataria\nR$ 55,99 por 30cm' },
    { id: '2', image: require('../../../assets/algodão.jpg'),title: 'Algodao\nR$ 35,99 por 30cm' },
    { id: '3', image: require('../../../assets/linhãografite.jpg'),title: 'Linhão\nR$ 9,99 por 15cm' },
    { id: '4', image: require('../../../assets/linho.jpg') ,title: 'inho\nR$ 22,30 por 15cm'},
    { id: '4', image: require('../../../assets/seda.jpg') ,title: 'Seda\nR$ 99,99 por 15cm'},
    { id: '9', image: require('../../../assets/jeans.jpg') ,title: 'linho\nR$ 22,50 por 15cm'},
    { id: '10', image: require('../../../assets/moussekine.jpg') ,title: 'mousseline\nR$ 22 por 15cm'},
    { id: '11', image: require('../../../assets/renda.jpg') ,title: 'linho\nR$ 50,00 por 10cm'},
  
  ];

const produtosHorizontal: Produto[] = [
    { id: '5', image: require('../../../assets/orford.jpg') ,title: 'oxford\nR$30 por 50cm'},
    // { id: '6', image: require('../../../assets/pelucia.jpg') ,title: 'pelucia/noii' },
    { id: '6', image: require('../../../assets/pelucia.jpg'), title: 'pelucia\nR$ 15,99 por 30cm ' },

    { id: '7', image: require('../../../assets/tricole.jpg') ,title: 'tricoline\nR$ 19,99 por 15cm'},
    { id: '8', image: require('../../../assets/tricoline.jpg') ,title: 'tricoline\nR$ 15,50 por 40cm'},
];
    const renderItem = ({ item }: { item: Produto }) => (
      <View style={style.produtoContainer}>
        <Image source={item.image} style={style.produtoImage} />
        <Text style={style.produtoTitle}>{item.title}</Text>
   
      </View>
    );

  return (
    <View style={style.container}>


<>
<View style={style.profileContainer}>
  <Image 
    source={require('../../../assets/perfil.jpg')} 
     style={style.profileImage} 
      />
</View> 



 <TouchableOpacity style={style.button}>
  <FontAwesome name="search" size={20} color="black" />
  <Text style={style.buttonText}>Pesquise aqui</Text>
</TouchableOpacity>
</>

      <FlatList
        data={produtosvertical}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false} 
        numColumns={2}
      />
   

   
    <View style={style.container2 }> 
   
   <Text style={style.buttonText2}>Favoritos </Text>

      <FlatList
        data={produtosHorizontal}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false} 
      />

 </View>
 
   </View>
      
   
  );
};

export default Home;




