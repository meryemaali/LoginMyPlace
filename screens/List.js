import React, {useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const List = ({navigation}) => {
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
      <Button title="Choose Date" onPress={showDatePicker} color="#FF5500" style={{width:170, marginTop:20,}}/>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

    </View>
    
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20,
    marginTop:100,
    width:200 ,
    alignItems:'center',
    marginLeft:110,
  },
});

export default List;
