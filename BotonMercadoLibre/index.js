import React from 'react';
import { AppRegistry, View, Dimensions } from 'react-native';

import MercadoLibreBtn from './src/components/MercadoLibreBtn';

const { width, height } = Dimensions.get('window');
const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width, height }}>
    <MercadoLibreBtn
      onPress={() => console.log('Hello')}
    />
  </View>


);
AppRegistry.registerComponent('BotonMercadoLibre', () => App);
