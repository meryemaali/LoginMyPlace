import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';


import {
  
  StyledContainer, 
  PageLogo, 
  PageTitle, 
  SubTitle, 
  StyledInputLabel, 
  StyledFormArea, 
  StyledButton, 
  StyledTextInput, 
  LeftIcon, 
  RightIcon, 
  InnerContainer, 
  ButtonText, 
  MsgBox, 
  Line, 
  ExtraView, 
  ExtraText, 
  TextLink, 
  TextLinkContent, 
  Colors, 
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

                <StyledButton onPress={() => navigation.navigate('List')}>
                     <ButtonText>List of seats</ButtonText>
                </StyledButton>
                <StyledButton onPress={() => {navigation.navigate('Scan')}}>
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
