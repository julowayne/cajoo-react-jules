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
import {Auth} from 'aws-amplify';




class PhoneConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      canGo: false,
    };
  }
  creerMonCompte = async () => {
    try {
      const {user} = await Auth.signUp({
        username: '+33687783534',
        password: '444444',
      });
      console.log('utilisateur créé:', user);
    } catch (error) {
      console.log('error signing up:', error);
				Auth.forgotPassword('+33687783534')
						.then(data => console.log(data))
						.catch(err => console.log(err));
				// Collect confirmation code and new password, then
				Auth.forgotPasswordSubmit(username, code, new_password)
						.then(data => console.log(data))
						.catch(err => console.log(err));
    }
  };
  onChangePhoneNumber = username => {
    let canGo = false;
    this.setState({
      username,
    });
    if (username.length == 10 && username.charAt(0) == 0) {
      username = username.substring(1);
      this.setState({
        username,
      });
      if (validatePhone('+33' + username)) {
        canGo = true;
      }
    }
    if (username.length == 9) {
      this.setState({
        username,
      });
      if (validatePhone('+33' + username)) {
        canGo = true;
      }
    }
    this.setState({
      canGo,
    });
  };
  canGoForward = async () => {
    if(this.state.canGo) {
      console.log(this.state.username)
      const myNum = `+33${this.state.username}`
      try {
        const {user} = await Auth.signUp({
          username: `+33${this.state.username}`,
          password: '444444',
        });
        this.props.navigation.navigate('validateConnect', {
          phoneNumber: `+33${this.state.username}`
        });
        console.log('utilisateur créé:', user);
      } catch (error) {
        console.log('error signing up:', error);
        if(error.code === 'UsernameExistsException') {
          console.log('utilisateur existant')
          Alert.alert('Erreur', "Un utilisateur existe déjà avec ce numéro", [{text: 'Fermer'}]);
        }
      }
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
              onChangeText={username => this.onChangePhoneNumber(username)}
              value={this.state.username}
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
