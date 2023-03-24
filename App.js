
import react from "react";
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screen/Home';
import Calculation from './Screen/Calculation';



const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} 
          options={{
            headerStyle: {backgroundColor: '#E8A700'},
            }}/>
          <Stack.Screen name="Calculation" component={Calculation} 
          options={{
            headerStyle: {backgroundColor: '#E8A700'},
            }}/>
        </Stack.Navigator>
        </NavigationContainer>
      );
    }