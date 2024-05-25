import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../screens/Main';
import Information from '../screens/Information';
import Kitten from '../screens/Kitten';
import Senior from '../screens/Senior';
import KittenDetail from '../screens/KittenDetail';

const Drawer = createDrawerNavigator();

export const MyDrawer =() => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Main} />
      <Drawer.Screen name="Login" component={Information} />
      <Drawer.Screen name="Kitten" component={Kitten} />
      <Drawer.Screen name="Kitten Detail" component={KittenDetail} />
    </Drawer.Navigator>
  );
}