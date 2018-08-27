import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({

  centeredItems: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  logo: {
    height: '20%',
    width: '60%',
  },

  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  signUpForm: {
    width: '70%',
    height: '100%',
  },

  inline: {
    flexDirection: 'row',
  },

  signUpLabels: {
    color: 'white',
    fontSize: 15,
    marginBottom: 4,
    marginLeft: 0,
    fontWeight: 'bold',
  },

  signUpFormInput: {
    color: 'white',
    height: 30,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'white',
  },

  signUpFormRow: {
    marginTop: 15,
    width: '100%',
  },

  rowLeft: {
    width: '45%',
    marginRight: '5%',
  },

  rowRight: {
    width: '45%',
    marginLeft: '5%',
  },

  button: {
    marginTop: 15,
    height: 30,
    backgroundColor: '#CB4640',
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    height: 45,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  already: {
    color: 'white',
    fontSize: 14,
  },

  clickHere: {
    color: '#CB4640',
    textDecorationLine: 'underline'
  }
})