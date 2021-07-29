import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRscanne extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    ToastAndroid.show('can not go back ', ToastAndroid.SHORT);
    return true;
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
    setTimeout(() => {
      this.setState({
        modalVisible: false,
      });
      this.scanner.reactivate()
      this.props.navigation.navigate('Tour');   
    }, 4500);
   
  };

  


  render() {
    return (
      <View>
        <QRCodeScanner ref={(node) => { this.scanner = node } } onRead={this.onSuccess} showMarker={true}  />

        <View>
          <Modal
            animationType="slide"
            transparent
            visible={this.state.modalVisible}>
            <View style={styles.modalView}>
              <Text style={styles.textStyle}>Loading...</Text>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    marginTop: '70%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});