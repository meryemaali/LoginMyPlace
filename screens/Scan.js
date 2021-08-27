import React, {useState, useEffect,useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import axios from 'axios';
import {CredentialsContext} from '../components/CredentialsContext';
import './variableglobale';


export default function Scan () {
  const [hasPermission, setHasPermission] = useState (null);
  const [scanned, setScanned] = useState (false);


const [isLoading, setLoading] = useState (true);
const [result, setResult] = useState ([]);



  useEffect (() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync ();
      setHasPermission (status === 'granted');
      
    }) ();

    
  }, []);

  
  const handleBarCodeScanned = ({type, data}) => {
  setScanned (true);
  
    fetch ('https://vast-scrubland-63151.herokuapp.com/place/' + data,
     {
        method: 'PUT',
      },
      )

  .then (response => response.json ())
  //.then ((data) => console.log('This is your data', data))
  .then ((data) => setResult(data))
  .catch (error => console.error (error))
  .finally (() => setLoading (false));

  console.log(result);

  if((result.etat) === '0'){
     return alert (`Bar code with type ${type} and data ${data} has been scanned! 
Place booked` );}
  else {
    return alert (`Bar code with type ${type} and data ${data} has been scanned!
Place not booked`);}


};


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned &&
        <Button title={'Scan again'} color='#FF5500' onPress={() => setScanned (false)} />

        }
        

        
    </View>
  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
