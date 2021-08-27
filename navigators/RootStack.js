import React from 'react';

//colors
import { Colors } from './../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CredentialsContext } from './../components/CredentialsContext';


// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import List from './../screens/List';
import Scan from './../screens/Scan';
import Data from './../screens/Data';

import Tabs from './../navigators/tabs';


const Stack = createStackNavigator();


const RootStack = () => {
  return (
     <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
     
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
            initialRouteName="Login"
          >
             {storedCredentials ? (
             <Stack.Screen
                options={{
                  headerTintColor: primary,
                }}
                name="Welcome"
                component={Tabs}
              />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="Scan" component={Scan} />
                <Stack.Screen name="Data" component={Data} />


           </>
            )}   
          </Stack.Navigator>
         
          </NavigationContainer>
              )}
        </CredentialsContext.Consumer>
      
  );
};

export default RootStack;