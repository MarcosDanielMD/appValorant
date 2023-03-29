import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function Mapas(){
  return(
<View>
<ScrollView>
  <Text style={styles.titulo}>Mapas no Jogo</Text>
<Text style={styles.subtitulo}>Ascent</Text>
<Image source={require('../assets/ascent.jpg')} style={styles.img} />
<Text style={styles.subtitulo}>Icebox</Text>
<Image source={require('../assets/icebox.jpg')} style={styles.img} />
<Text style={styles.subtitulo}>Breeze</Text>
<Image source={require('../assets/breeze.jpg')} style={styles.img} />
</ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
img :
{
  margin: 20,
  borderRadius: 10,
  width: '90%',
  height:'50%', 
  alignItems:'center'
},
titulo:
{
  fontWeight:'bold',
  fontSize: 25,
  margin: 15,
  textAlign:'center'
},
subtitulo:
{
  fontWeight:'bold',
  fontSize: 25,
  margin: 15,
  color:'red'
}
});