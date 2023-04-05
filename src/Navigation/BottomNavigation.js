import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screen/HomeScreen"
import ChatScreen from "../screen/ChatScreen"
import AddScreen from "../screen/AddScreen"
import ProfilScreen from "../screen/ProfilScreen"
import SearchScreen from "../screen/SearchScreen"
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigation