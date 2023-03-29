import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function BoloChocolate() {
  return (
    <View style={styles.duelistas}>
      <ScrollView>
        <Text style={styles.titulo}> Duelistas</Text>
        <Text style={styles.subtitulo}>Reyna</Text>
        <Image source={require('../assets/reyna.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Jett</Text>
        <Image source={require('../assets/jett.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Raze</Text>
        <Image source={require('../assets/raze.png')} style={styles.img} />
        <Text style={styles.titulo}> Sentinelas</Text>
        <Text style={styles.subtitulo}>Sage</Text>
        <Image source={require('../assets/sage.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Chamber</Text>
        <Image source={require('../assets/chamber.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Cypher</Text>
        <Image source={require('../assets/cypher.png')} style={styles.img} />
        <Text style={styles.titulo}> Controladores</Text>
        <Text style={styles.subtitulo}>Astra</Text>
        <Image source={require('../assets/astra.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Omen</Text>
        <Image source={require('../assets/omen.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Viper</Text>
        <Image source={require('../assets/viper.png')} style={styles.img} />
        <Text style={styles.titulo}> Iniciadores</Text>
        <Text style={styles.subtitulo}>Sova</Text>
        <Image source={require('../assets/sova.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Fade</Text>
        <Image source={require('../assets/fade.png')} style={styles.img} />
        <Text style={styles.subtitulo}>Gekko</Text>
        <Image source={require('../assets/gekko.png')} style={styles.img} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    margin: 40,
    borderRadius: 10,
    width: '60%',
    height: '20%',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 15,
  },
  duelistas: {
    margin: 40,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 15,
    color: 'red',
  },
});
