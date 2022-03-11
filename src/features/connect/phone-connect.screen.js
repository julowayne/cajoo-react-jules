import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import styles from './phone-connect.styles';
import validatePhone from '../onboarding/login/login.helper';



class PhoneConnect extends React.Component {
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
  canGoForward = () => {
    if(this.state.canGo) {
      this.props.navigation.navigate('validateConnect', {
        phoneNumber: this.state.phone
      });
    } else {
      Alert.alert('Erreur', "Votre numéro de téléphone n'est pas valide ou incomplet", [{text: 'Fermer'}]);
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.logoPitch}>
          <Text style={styles.phone}>
            Quel est votre numéro ?
          </Text>
          <Text style={styles.delivery}>
            Pour que notre livreur puisse vous contacter 😄
          </Text>
          <View style={styles.phoneInput}>
            <Image
              style={styles.flag}
              source={require('./../../assets/fr-small.png')}
            />
            <Image
              style={styles.dropDown}
              source={require('./../../assets/down.png')}
            />
            <Text style={styles.indicativePhoneInput}>+33</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={phone => this.onChangePhoneNumber(phone)}
              value={this.state.phone}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <Text style={styles.discover}>
            En cliquant sur "CONTINUER", vous acceptez la  <Text style={styles.underlineText}>Politique de Confidentialité</Text>, les <Text style={styles.underlineText}>CGU</Text> et les <Text style={styles.underlineText}>CGV</Text> de Cajoo.
          </Text>
          <TouchableOpacity style={ this.state.canGo ? styles.buttonValidate : styles.buttonCantValidate } onPress={this.canGoForward}>
            <Text style={styles.connectText}>
              CONTINUER
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default PhoneConnect;
