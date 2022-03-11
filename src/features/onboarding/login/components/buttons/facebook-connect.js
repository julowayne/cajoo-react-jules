import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions, Image} from 'react-native';

const FacebookConnectButton = (props) => {

  return (
    <TouchableOpacity style={styles.connect}
    {...props}>
      <Image
        source={require('../../../../../assets/facebook.png')}
        style={styles.icon}
      />
      <Text style={styles.connectText}>Continuer avec Facebook</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  connect: {
    backgroundColor: '#0000FF',
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
    fontWeight: 'bold',
    fontWeight: '900',
    fontSize: 17
  },
  icon: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 45,
  },
});

export default FacebookConnectButton;