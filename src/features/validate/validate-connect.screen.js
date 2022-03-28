import React from 'react';
import {
  View,
  Text,
  TextInput,
  Alert
} from 'react-native';
import styles from './validate-connect.styles';
import {Auth} from 'aws-amplify';




class ValidateConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: new Array(6)
    };
  }
  confirmUser = async () => {
    console.log(this.state.code.join(''))
    const verifyCode = this.state.code.join('')
    try {
      console.log(verifyCode)
      const response = await Auth.confirmSignUp(`${this.props.route.params.phoneNumber}`, verifyCode);
      console.log('response:', JSON.stringify(response))
      Alert.alert('code confirmé', "Votre confirmation a bien été prise en compte", [{text: 'Fermer'}])
      setTimeout(() =>{  this.props.navigation.navigate('SignOutConnect'), 2000})
    } catch (error) {
      if(error.code === "ExpiredCodeException"){
        setTimeout(() => {this.reSendCode()}, 3000)
        console.log('nouveau code envoyé')
      }
        console.log('error confirming sign up', error);
    }
  }
  reSendCode = () => {
    Auth.forgotPassword(this.props.route.params.phoneNumber)
    .then(data => 
      console.log(data),
      Alert.alert('Nouveau code', "Vous avez du recevoir votre nouveau code sur votre téléphone", [{text: 'Fermer'}])
    ).catch(err => console.log(err));
  }
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
          <TextInput style={styles.input} keyboardType='numeric' maxLength={1} onChangeText={(value) => { this.second.focus(); this.state.code[0] = value }} blurOnSubmit={false}/>
          <TextInput style={styles.input} keyboardType='numeric' maxLength={1} onChangeText={(value) => { this.third.focus(); this.state.code[1] = value}} ref={(input) => { this.second = input; }} blurOnSubmit={false} />
          <TextInput style={styles.input} keyboardType='numeric' maxLength={1} onChangeText={(value) => { this.fourth.focus(); this.state.code[2] = value}} ref={(input) => { this.third = input; }} blurOnSubmit={false} />
          <TextInput style={styles.input} keyboardType='numeric' maxLength={1} onChangeText={(value) => { this.fifth.focus(); this.state.code[3] = value}} ref={(input) => { this.fourth = input; }} blurOnSubmit={false} />
        </View>  
        <View style={styles.inputs}>
          <TextInput style={styles.input} keyboardType='numeric' maxLength={1} onChangeText={(value) => { this.sixth.focus(); this.state.code[4] = value }} ref={(input) => { this.fifth = input; }} blurOnSubmit={false} />
          <TextInput style={styles.input} keyboardType='numeric' maxLength={1} onChangeText={(value) => { this.state.code[5] = value; this.confirmUser()}} ref={(input) => { this.sixth = input; }} blurOnSubmit={false} />
        </View>
        <Text style={styles.sendCode}>
          Vous n'avez pas reçu le code ? <Text style={styles.underline} onPress={this.reSendCode}>Renvoyer</Text>
        </Text>
      </View>
    );
  }
}

export default ValidateConnect;
