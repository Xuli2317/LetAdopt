import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import Adult from '../screens/Adult';
import Kitten from '../screens/Kitten';
import Mature from '../screens/Mature';
import Senior from '../screens/Senior';
import Information from '../screens/Information';
import KittenDetail from '../screens/KittenDetail';
import KittenForm from '../screens/KittenForm';
import AdultDetail from '../screens/AdultDetail';
import SeniorDetail from '../screens/SeniorDetail';
import MatureDetail from '../screens/MatureDetail';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: "LET ADOPT",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#91837a" 
          }
        }}
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
        options={{ title: "Your information" }}
      />
      <Stack.Screen
        name="KittenDetail"
        component={KittenDetail}
        options={{ title: "Kitten Detail" }}
      />

      <Stack.Screen name="Kitten Form" component={KittenForm} />

      <Stack.Screen
        name="AdultDetail"
        component={AdultDetail}
        options={{ title: "Adult Detail" }}
      />


      <Stack.Screen
        name="MatureDetail"
        component={MatureDetail}
        options={{ title: "Mature Detail" }}
      />

      <Stack.Screen
        name="SeniorDetail"
        component={SeniorDetail}
        options={{ title: "Senior Detail" }}
      />
    </Stack.Navigator>
  );


}
