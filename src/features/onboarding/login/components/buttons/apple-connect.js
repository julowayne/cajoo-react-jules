import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions, Image} from 'react-native';

const AppleConnectButton = (props) => {

  return (
    <TouchableOpacity style={styles.connect}
    {...props}>
      <Text style={styles.connectText}>Continuer avec Apple</Text>
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  connect: {
    backgroundColor: '#000',
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
});

export default AppleConnectButton;