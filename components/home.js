import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home(props){
  return(
<View>
<Image source={require('../assets/imgprincipal.jpg')} style={styles.img} />

<TouchableOpacity onPress={()=>{props.navigation.navigate('Personagens')}}>
  <Text style={styles.lista}>Personagens</Text>
</TouchableOpacity>

<TouchableOpacity onPress= {()=> {props.navigation.navigate('Mapas')}}>
  <Text style={styles.lista}>Mapas</Text>
</TouchableOpacity>

<TouchableOpacity onPress= {()=> {props.navigation.navigate('Times')}}>
  <Text style={styles.lista}>Times</Text>
</TouchableOpacity>

</View>

  );
}

const styles = StyleSheet.create({
img :
{
  margin: 15,
  borderRadius: 10,
  width: '90%',
  height: '70%', 
},
lista: 
{
  fontWeight:'bold',
  fontSize: 15,
  padding: 5,
  textAlign:'center'
}
});

