import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import './variableglobale';
export default (Data = () => {
  const [isLoading, setLoading] = useState (true);
  const [data, setData] = useState ([]);
  useEffect (() => {
    fetch ('https://vast-scrubland-63151.herokuapp.com/place')
      .then (response => response.json ())
      .then (json => setData (json))
      .then (console.log ('This is your data', data))
      .catch (error => console.error (error))
      .finally (() => setLoading (false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading
        ? <Text>Loading...</Text>
        : <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {data.map ((value) => {
              return (
                <View>
                  
                  <Text>qr : {value._id} </Text>
                  <Text>etage : {value.etage} </Text>
                  <Text>état : {value.etat} </Text>
                  <Text> </Text>

                </View>
              );
            })}
          </View>}
    </View>
  );
});
