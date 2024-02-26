import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/profile';
import Home from './screens/home'
import Busqueda from './screens/busqueda'

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen name='Busqueda' component={Busqueda}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Home' component={Home}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
