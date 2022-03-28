import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFF',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    justifyContent: 'center',
  },
  inputs:{
    flexDirection: 'row',
    textAlign: 'center',
  },
  input : {
    backgroundColor: '#d3d3d3',
    margin: 8,
    width: 70,
    height: 70,
    borderRadius: 8
  },
  confirm: {
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center'
  },
  verify: {
    textAlign: 'center'
  },
  sendCode: {
    textAlign: 'center',
    marginTop: 20
  },
  underline : {
    color: '#ff3537',
    textDecorationLine: 'underline',
  }
  
});

export default styles;
