import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    paddingHorizontal: 20,
    paddingVertical: 25,
    justifyContent: 'center',
  },
  phone: {
    color: '#565656',
    fontWeight: '900',
    fontSize: 20,
    bottom: 30
  },
  delivery: {
    color: '#565656',
    bottom: 25,
    fontWeight: 'bold'
  },
  buttonValidate: {
    opacity: 1,
    backgroundColor: '#ff3537',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  buttonCantValidate: {
    opacity: 0.4,
    backgroundColor: '#ff3537',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  logoPitch: {
    alignItems: 'center',
  },
  buttons: {
    top: 220,
  },
  pitch :{
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  discover: {
    color: '#565656',
    fontWeight: 'bold',
    fontSize: 13,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 15,
  },
  underlineText: {
    color: '#ff3537',
    textDecorationLine: 'underline',
  },
  text: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  forward: {
    alignItems: 'center',
  },
  phoneInput: {
    fontSize: 14,
    marginBottom: 20,
    padding: 5,
    backgroundColor: 'rgba(160,160,160,0.20)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 32,
    height: 32,
  },
  dropDown: {
    marginLeft: 10,
    width: 16,
    height: 16,
  },
  indicativePhoneInput: {
    marginLeft: 10,
  },
  input: {
    width: '70%',
  },
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

export default styles;
