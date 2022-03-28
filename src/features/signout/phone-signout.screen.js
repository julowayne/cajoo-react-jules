import React from 'react';
import {
  View,
  Text,
  TextInput,
  Alert
} from 'react-native';
import styles from './phone-signout.styles';
import {Auth} from 'aws-amplify';




class SignOutConnect extends React.Component {



signOut = async () => {
  try {
    await Auth.signOut();
    console.log('user signed out')
    this.props.navigation.navigate('Landing');
  } catch (error) {
      console.log('error signing out: ', error);
  }
}
  render() {
    return (
      <View style={styles.background}>
      <Text>
        Vous êtes maintenant connecté 
      </Text>
      <TouchableOpacity style={styles.buttonValidate} onPress={this.signOut}>
            <Text style={styles.connectText}>
              ME DECONNECTER
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default SignOutConnect;
