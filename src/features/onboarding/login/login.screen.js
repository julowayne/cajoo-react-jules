import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './login.styles';
import AppleConnectButton from './components/buttons/apple-connect';
import FacebookConnectButton from './components/buttons/facebook-connect';
import GoogleConnectButton from './components/buttons/google-connect';
import PhoneConnectButton from './components/buttons/phone-connect';

import validatePhone from './login.helper';


class Login extends React.Component {
  connectWith = () => {
    this.props.navigation.navigate('PhoneConnect');
  };
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.information}>
          <Text style={styles.pitch}>Connectez vous simplement !</Text>
        </View>
        <View>
          <AppleConnectButton />
          <FacebookConnectButton />
          <GoogleConnectButton />
          <PhoneConnectButton onPress={this.connectWith}  />
        </View>
      </View>
    );
  }
}

export default Login;
