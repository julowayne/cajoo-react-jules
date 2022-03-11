import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import styles from './validate-connect.styles';



class ValidateConnect extends React.Component {

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.confirm}>
          Confirmez votre numéro ! 
        </Text>
        <Text style={styles.verify}>
          Verifiez le numéro envoyé au {this.props.route.params.phoneNumber}
        </Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.sendCode}>
          Vous n'avez pas reçu le code ? <Text style={styles.underline}>Renvoyer</Text>
        </Text>
      </View>
    );
  }
}

export default ValidateConnect;
