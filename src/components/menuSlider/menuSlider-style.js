import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    height: 150,
  },

  menuItemContainer: {
    alignItems: 'center',
    height: 150,
    marginLeft: 7,
    marginRight: 7,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#9a9ea5',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  image: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },

  name: {
    fontSize: 16,
  },

  price: {
    color: '#9a9ea5',
  }
})

export default styles