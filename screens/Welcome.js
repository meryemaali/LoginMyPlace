import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';


import {
  
  PageTitle,
  SubTitle,
  StyledFormArea, 
  StyledButton,
  InnerContainer,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from './../components/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './../components/CredentialsContext';

const Welcome = ({navigation}) => {
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { nom, email } = storedCredentials;

const clearLogin = () => {
    AsyncStorage.removeItem('MyPlaceCredentials')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

 return (
      <>
        <StatusBar style="dark" />
        <InnerContainer>
        {/*<WelcomeImage resizeMode="cover" source={require('./../assets/img/logo.png')} />*/}
          <Avatar resizeMode="cover" source={require('./../assets/img/logo.png')} />
          

          <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! You</PageTitle>
          <SubTitle welcome={true}>{nom || 'User' }</SubTitle>
           <SubTitle welcome={true}>{email || 'user@gmail.com'}</SubTitle>
              <StyledFormArea>
               <Line/>

                <StyledButton onPress={() => {navigation.navigate('Login')}}>
                     <ButtonText>List of places</ButtonText>
                </StyledButton>
                <StyledButton onPress={() => {navigation.navigate('Login')}}>
                     <ButtonText>Book a seat</ButtonText>
                </StyledButton>
                <StyledButton onPress={clearLogin}>
                     <ButtonText>Logout</ButtonText>
                </StyledButton>
                
              </StyledFormArea>
            
          </WelcomeContainer>
        </InnerContainer>
      </>
  );
};
export default Welcome;