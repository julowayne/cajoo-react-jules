import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions, Image} from 'react-native';

const GoogleConnectButton = (props) => {

  return (
    <TouchableOpacity style={styles.connect}
    {...props}>
      <Image
        source={require('../../../../../assets/google.png')}
        style={styles.icon}
      />
      <Text style={styles.connectText}>Continuer avec Google 👋</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  connect: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 10
  },
  connectText: {
    color: '#000',
    fontWeight: 'bold',
    fontWeight: '900',
    fontSize: 17
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 50,
  },
});

export default GoogleConnectButton;