import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Log/Login';
import SignIn from '../Log/SignIn';
import SignUp from '../Log/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LogNavigation() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Start" component={Login}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
  );
}

export default LogNavigation