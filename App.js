import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import QRscanne from './screens/QRscanne';
import RootStack from './navigators/RootStack';



export default function App() {
  const [appReady, setAppReady] = useState(false);
   const [storedCredentials, setStoredCredentials] = useState("");

   const checkLoginCredentials = () => {
    AsyncStorage.getItem('CMyPlaceCredentials')
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return <AppLoading 
    startAsync={checkLoginCredentials} 
    onFinish={() => setAppReady(true)} 
    onError={console.warn} />;
  }

  /*return (
    <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <RootStack />
    </CredentialsContext.Provider>
  );
}*/

 return (
      <Welcome />
  );
}