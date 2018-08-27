import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  truckName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  truckNameContainer: {
    position: 'absolute',
    height: 25,
    top: 223,
    right: 8,

  },

  menuTitleContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },

  menuTitle: {
    fontSize: 20,
  },

  aboutContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
  },

  aboutTitle: {
    fontSize: 20,
  },

  about: {
    color: '#9a9ea5',
    marginTop: 10,
  },

  backButton: {
    position: 'absolute',
    top: 25,
    left: 20,
    zIndex: 10,
  },
})

export default styles