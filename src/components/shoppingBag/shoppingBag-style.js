import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  background: {
    backgroundColor: '#ededed',
    paddingBottom: 123,
  },

  productImage: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    marginTop: 10,
    marginBottom: 10,
  },

  imageContainer: {
    shadowColor: '#9a9ea5',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  productContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  productInfo: {
    paddingTop: 8,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    height: 'auto',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inlineInfo: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },

  productName: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productPrice: {
    position: 'absolute',
    right: 15,
  },

  bigFontSize: {
    fontSize: 18,
  },

  grey: {
    color: '#9a9ea5'
  },

  bold: {
    fontWeight: 'bold',
  },

  button: {
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
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  ingredients: {
    marginTop: 10,
    marginLeft: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    backgroundColor: '#cccdce',
    height: 1,
    width: '80%',
  },

  detailContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
  },

  detailRow: {
    flexDirection: 'row',
    width: '45%',
  },

  detailName: {
    width: '50%',
  },

  detailValue: {
    width: '50%',
    alignItems: 'flex-end',
  },
})

export default styles