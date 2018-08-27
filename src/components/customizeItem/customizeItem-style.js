import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  itemPicture: {
    height: 220,
  },

  productName: {
    position: 'absolute',
    top: 180,
    width: '100%',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  title: {
    marginTop: 40,
    textAlign: 'center',
    width: '100%',
    fontSize: 23,
  },

  ingredientsList: {
    flex: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: 'white',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 95,
    paddingRight: 95,
  },

  ingredientContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  ingredientUnChecked: {
    fontSize: 17,
    color: 'black',
    marginBottom: 10,
  },

  check: {
    position: 'absolute',
    right: 0,
  },

  ingredientChecked: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  next: {
    borderRadius: 5,
    backgroundColor: '#CB4640',
    justifyContent: 'center',
    width: '65%',
    height: 45,
    paddingTop: 5,
    paddingBottom: 7,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 25,
    color: 'white',
  },

  modalView: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 20,
  },

  button: {
    borderRadius: 5,
    backgroundColor: '#CB4640',
    width: '50%',
    height: 45,
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  number: {
    color: 'white',
    fontSize: 80,
    marginBottom: 20,
  },

  symbols: {
    color: 'white',
    fontSize: 60,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  inlineSymbols: {
    flexDirection: 'row',
  },

  iconContainer: {
    position: 'absolute',
    top: 35,
    right: 20,
  },

  backButton: {
    position: 'absolute',
    top: 25,
    left: 20,
    zIndex: 10,
  },
})

export default styles