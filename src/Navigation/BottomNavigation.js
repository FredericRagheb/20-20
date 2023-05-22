import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screen/HomeScreen";
import AddScreen from "../screen/AddScreen";
import SearchScreen from "../screen/SearchScreen";



const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Like" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={AddScreen} />

      </Tab.Navigator>
  );
}

export default BottomNavigation;
