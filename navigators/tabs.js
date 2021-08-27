import React from 'react';
import {
    View, Image, TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Welcome from './../screens/Welcome';
import List from './../screens/List';
import Scan from './../screens/Scan';
import Date from '../screens/Date';
import Data from './../screens/Data';

import {Ionicons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();



const Tabs = () => {
    return(
        

        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'List') {
              return (
                <Ionicons
                  name={focused ? 'list' : 'list'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Scan') {
              return (
                <Ionicons
                  name={focused ? 'scan' : 'scan'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Data') {
              return (
                <Ionicons
                  name={focused ? 'help' : 'help'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Date') {
              return (
                <Ionicons
                  name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}>
        <Tab.Screen name="Home" component={Welcome} />

            <Tab.Screen
                name="List"
                component={List}

            />

            <Tab.Screen name="Scan" component={Scan} />
            <Tab.Screen name="Date" component={Date} />
            <Tab.Screen name="Data" component={Data} />


            


        </Tab.Navigator>
    )
}
export default Tabs;