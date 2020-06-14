import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import PracticesScreen from './screens/Practices';
import PracticeScreen from './screens/Practice';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Practices" component={PracticesScreen} />
        <Stack.Screen name="Practice" component={PracticeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
