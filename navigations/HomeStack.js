import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Adult from '../screens/Adult';
import Kitten from '../screens/Kitten';
import Mature from '../screens/Mature';
import Senior from '../screens/Senior';
import Information from '../screens/Information';
import KittenDetail from '../screens/KittenDetail';
import AdultDetail from '../screens/AdultDetail';
import SeniorDetail from '../screens/SeniorDetail';
import MatureDetail from '../screens/MatureDetail';
import Sendinginfo from '../screens/Sendinginfo';
import EventAll from '../screens/EventAll';
import EventDetail from '../screens/EventDetail';
import ShelterAll from '../screens/ShelterAll';
import ShelterDetail from '../screens/ShelterDetail';

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
        name="Information"
        component={Information}
        options={{ title: "Adopt cat" }}
      />
      <Stack.Screen
        name="KittenDetail"
        component={KittenDetail}
        options={{ title: "Cat Detail" }}
      />
      <Stack.Screen
        name="AdultDetail"
        component={AdultDetail}
        options={{ title: "Cat Detail" }}
      />
      <Stack.Screen
        name="MatureDetail"
        component={MatureDetail}
        options={{ title: "Cat Detail" }}
      />
      <Stack.Screen
        name="SeniorDetail"
        component={SeniorDetail}
        options={{ title: "Cat Detail" }}
      />
      <Stack.Screen
        name="Sendinginfo"
        component={Sendinginfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventAll"
        component={EventAll}
        options={{title: "All Event"}}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{title: "Event Detail"}}
      />
      <Stack.Screen
        name="ShelterAll"
        component={ShelterAll}
        options={{title: "All Shelter"}}
      />
      <Stack.Screen
        name="ShelterDetail"
        component={ShelterDetail}
        options={{title: "Shelter Detail"}}
      />
    </Stack.Navigator>
  );


}
