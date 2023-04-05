import React from 'react';
import {SafeAreaView,Text, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Bai1 from './src/ps24388_bv/Bai1';
import Bai2 from './src/ps24388_bv/Bai2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName='Bai1' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Bai1' component={Bai1} />
      <Stack.Screen name='Bai2' component={Bai2} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

