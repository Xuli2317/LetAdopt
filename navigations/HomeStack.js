import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Adult from '../screens/Adult';
import Kitten from '../screens/Kitten';
import Mature from '../screens/Mature';
import Senior from '../screens/Senior';
import Information from '../screens/Information';
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: "Let's adopt!" }}
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
        name="Information"
        component={Information}
        options={{ title: "Information" }}
      />
      
   
     </Stack.Navigator>
  );


}
