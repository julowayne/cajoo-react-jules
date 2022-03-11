import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions, Image} from 'react-native';

const PhoneConnectButton = (props) => {

  return (
    <TouchableOpacity style={styles.connect}
    {...props}>
      <Image
        source={require('../../../../../assets/call.png')}
        style={styles.icon}
      />
      <Text style={styles.connectText}>Avec votre numéro !</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  connect: {
    backgroundColor: '#ff3537',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 10
  },
  connectText: {
    color: '#FFFF',
    fontWeight: '900',
    fontSize: 17
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 70,
  },
});

export default PhoneConnectButton;