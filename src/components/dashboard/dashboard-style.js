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

  truckImage: {
    flex: 1,
    height: 200,
    width: '100%',
    resizeMode: 'cover'
  },

  cardContainer: {
    shadowColor: '#9a9ea5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  truckInfo: {
    paddingTop: 8,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    height: 'auto',
    marginBottom: 15,
    backgroundColor: 'white',
  },

  truckName: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  truckInfoRight: {
    alignSelf: 'flex-start',
  },

  truckInfoGreyFont: {
    color: '#9a9ea5'
  },
})

export default styles