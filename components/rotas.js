import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoloChocolate from './Personagens';
import BoloFuba from './Mapas';
import BoloMilho from './Times';
import Home from './home'

const Stack = createStackNavigator();

export default function Rotas(){
  return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component = {Home} />
    <Stack.Screen name="Personagens" component = {BoloChocolate} />
    <Stack.Screen name="Mapas" component = {BoloFuba} />
    <Stack.Screen name="Times" component = {BoloMilho} />
  </Stack.Navigator>
</NavigationContainer>
)
}

