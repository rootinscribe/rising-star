import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    shadowColor: '#9a9ea5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  paginationStyle: {
    justifyContent: 'center',
    bottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  titleContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },

  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.3,
    zIndex: 50,
  },
})

export default styles