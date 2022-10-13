import { StatusBar } from 'expo-status-bar';
import { AppRegistry, Dimensions, SafeAreaView, ScrollView,StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import HorizontalScroll from './components/HorizontalScroll';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default  function App() {
  
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={HorizontalScroll} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
