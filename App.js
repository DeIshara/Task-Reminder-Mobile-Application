

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateScreen from './screens/CreateScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="CreateScreen"
        component={CreateScreen}
        options={{ title: 'Create Task' }}
      />
      <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Task List' }}
      />
      <Stack.Screen 
       name="ListScreen"
       component={ListScreen}
       options={{ title: 'Task List' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}