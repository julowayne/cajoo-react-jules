import * as React from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import validatePhone from '../../onboarding/login/login.helper';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      canGo: false,
    };
  }
  onChangePhoneNumber = phone => {
    let canGo = false;
    this.setState({
      phone,
    });
    if (phone.length == 10 && phone.charAt(0) == 0) {
      phone = phone.substring(1);
      this.setState({
        phone,
      });
      if (validatePhone('+33' + phone)) {
        canGo = true;
      }
    }
    if (phone.length == 9) {
      this.setState({
        phone,
      });
      if (validatePhone('+33' + phone)) {
        canGo = true;
      }
    }
    this.setState({
      canGo,
    });
  };
  render() {
    return (
      <View style={styles.phoneInput}>
        <Image
          style={styles.flag}
          source={require('./../../../assets/fr-small.png')}
        />
        <Image
          style={styles.dropDown}
          source={require('./../../../assets/down.png')}
        />
        <Text style={styles.indicativePhoneInput}>+33</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={phone => this.onChangePhoneNumber(phone)}
          value={this.state.phone}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  phoneInput: {
    fontSize: 14,
    marginBottom: 20,
    padding: 5,
    backgroundColor: 'rgba(160,160,160,0.20)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 32,
    height: 32,
  },
  dropDown: {
    marginLeft: 10,
    width: 16,
    height: 16,
  },
  indicativePhoneInput: {
    marginLeft: 10,
  },
  input: {
    width: '70%',
  },
});

export default PhoneInput;