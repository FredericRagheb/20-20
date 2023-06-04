import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screen/HomeScreen";
import AddScreen from "../screen/AddScreen";
import SearchScreen from "../screen/SearchScreen";
import {AntDesign, FontAwesome5, Ionicons} from '@expo/vector-icons';
import { StatusBar } from 'react-native';



const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#163767' }, tabBarShowLabel: false, headerShown: false }}>
        <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarItemStyle: [] ,tabBarIcon: ()=> (<FontAwesome5 name="search" size={30} color="white" />) }}/>
        <Tab.Screen name="Like" component={HomeScreen} options={{ tabBarItemStyle: [] ,tabBarIcon: ()=> (<AntDesign name="heart" size={30} color="white" />) }}/>
        <Tab.Screen name="Add" component={AddScreen} options={{ tabBarItemStyle: [] ,tabBarIcon: ()=> (<FontAwesome5 name="plus" size={30} color="white" />) }}/>
      </Tab.Navigator>
  );
}

export default BottomNavigation;