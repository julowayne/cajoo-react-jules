import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const ForwardButton = (props) => {

  return (
    <TouchableOpacity style={styles.connect}
    {...props}>
      <Text style={styles.connectText}>CONTINUER</Text>
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
    borderRadius: 8,
  },
  connectText: {
    color: '#FFFF',
    fontWeight: 'bold'
  },
});

export default ForwardButton;