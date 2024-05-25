import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import { MyDrawer } from './navigations/MyDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
      
  );
}
