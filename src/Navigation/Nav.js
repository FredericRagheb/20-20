import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogNavigation from './LogNavigation';
import BottomNavigation from './BottomNavigation';
import AddScreen from "../screen/AddScreen";


const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Log" component={LogNavigation} />
        <Stack.Screen name="BottomScreens" component={BottomNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav