import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Base from './BaseScreen';
import Results from './ResultsScreen';

export default function SearchTabScreen() {
  
  const Stack = createStackNavigator();
  const navigationRef = React.useRef(null);

  return (
  <NavigationContainer independent={true}>
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Base" component={Base} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
