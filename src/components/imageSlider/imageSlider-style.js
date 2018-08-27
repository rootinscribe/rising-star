import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    height: 250,
    shadowColor: '#9a9ea5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  paginationStyle: {
    justifyContent: 'flex-start',
    left: 5,
    bottom: 5,
  },
})

export default styles