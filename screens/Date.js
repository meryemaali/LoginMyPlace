import React, {useState} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
  Avatar,
} from '../components/styles';


const Date = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState (false);

  const showDatePicker = () => {
    setDatePickerVisibility (true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility (false);
  };

  const handleConfirm = date => {
    console.warn ('A date has been picked: ', date);
    hideDatePicker ();
  };

  return (
    <View style={[styles.container]}>
    <Text style={[styles.text]}>
    Please, choose the date of your reservation
     </Text>
<View>
<Line />
<Line />
<Line />
<Line />
      <Button
        title="Start Date"
        onPress={showDatePicker}
        color="#FF5500"
        style={[styles.btn]}
      />
      <Line />
  
<Line />
<Line />

      <Button 
  title="End Date"
  onPress={showDatePicker}
  color="#FF5500"
  style={[styles.btn]}
/>
<Line />
<Line />
<Line />
<Button
  title="Book your place"
  color="#ff0000"
  style={{width: 400, marginTop: 20}}
/>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
</View>
   
</View>


  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 100,
    width: 200,
    alignItems: 'center',
    marginLeft: 110,
  },
   container1: {
    flex: 1,
    padding: 30,
    marginTop: 100,
    width: 200,
    alignItems: 'center',
    marginLeft: 0,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop:-100,
    marginLeft:-100,
    textAlign: 'center',
    },
    btn:{
      width: 170, 
      marginTop: 20,
   
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
      }
});

export default Date;
