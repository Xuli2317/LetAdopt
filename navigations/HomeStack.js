import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Main from '../screens/Main';

import Adult from '../screens/Adult';
import Kitten from '../screens/Kitten';
import Mature from '../screens/Mature';
import Senior from '../screens/Senior';
import Test from '../components/KittenDoc.js/Test';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Kitten"
        component={Kitten}
        options={{ title: "Kitten" }}
      />
      <Stack.Screen
        name="Adult"
        component={Adult}
        options={{ title: "Adult" }}
      />
      <Stack.Screen
        name="Mature"
        component={Mature}
        options={{ title: "Mature" }}
      />
      <Stack.Screen
        name="Senior"
        component={Senior}
        options={{ title: "Senior" }}
      />
      <Stack.Screen
        name="Bob"
        component={Test}
        options={{ title: "Bob" }}
      />
   
     </Stack.Navigator>
  );


}
