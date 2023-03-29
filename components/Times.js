import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';

export default function Times(){
  return(
<ScrollView>
<View>

<FlatList
          data={img}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.tituloimg}>
                <Image style={styles.img} source={item.capa} />
              </View>
              <Text style={styles.subtitulo}>
                Nome do time:
                <Text style={styles.palavra}>{item.nome} </Text>
              </Text>
            
           
      
            </View>
          )}
        />
</View>
</ScrollView>


  );
}

const styles = StyleSheet.create({
img :
{
    margin: 50,
  borderRadius: 10,
  width: '60%',
  height:'60%', 
},
subtitulo:
{
  fontWeight:'bold',
  fontSize: 15,
  margin: 15,
  color:'red'
}
});

const img = [
  {
    nome: ' Furia',
    capa: require('../assets/furia.jpg'),
  },

  {
    nome: ' Loud',
    capa: require('../assets/loud.jpg'),
  },

  {
    nome: ' Team Liquid',
    capa: require('../assets/liquid.png'),
  }
];
