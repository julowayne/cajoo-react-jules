import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './landing.styles';
import LandingConnectButton from './components/landing-connect-button';


class Landing extends React.Component {
  connect = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.logoPitch}>
        <Image style={styles.logo}
          source={require('../../../assets/CajooLOGO2.png')}
        />
        <Text style={styles.pitch}>
          Vos courses en 3 clics !
        </Text>
        </View>
        <View style={styles.buttons}>
        <LandingConnectButton onPress={this.connect} />
        <TouchableOpacity style={styles.discoverBtn} >
          <Text style={styles.discover}>Découvrir l'app</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Landing;
