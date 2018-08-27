import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  background: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderTopColor: 'white',
    borderTopWidth: 1,
    marginTop: 25,
  },

  avatar: {
    borderRadius: 150 / 2,
    width: 150,
    height: 150,
    marginBottom: 0,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  inputTag: {
    paddingTop: 5,
    fontSize: 20
  },

  firstName: {
    fontSize: 23,
    color: 'black',
  },

  lastName: {
    fontSize: 23,
    color: 'black',
  },

  description: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%',
    textAlign: 'center'
  },

  updateButton: {
    backgroundColor: 'green',
    fontSize: 20,
    paddingTop: 10,
    position: 'absolute',
    top: '63%',
    right: '50%',
    width: '50%',
    height: 55,
    paddingLeft: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  },

  cancelButton: {
    backgroundColor: '#CB4640',
    fontSize: 20,
    paddingTop: 10,
    position: 'absolute',
    top: '63%',
    left: '50%',
    width: '50%',
    height: 55,
    paddingLeft: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  },

  editInfo: {
    backgroundColor: '#d3cfcf',
    fontSize: 25,
    paddingTop: '3%',
    position: 'absolute',
    top: '80%',
    width: '100%',
    height: '9.5%',
    paddingLeft: '45%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black'
  },

  personalInformation: {
    width: '67%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    flexDirection: 'column',
    maxHeight: 155,
    marginTop: 5
  },

  row: {
    flex: 1,
    flexDirection: 'row'
  },

  header: {
    backgroundColor: '#CB4640',
    borderBottomWidth: 0,
    width: '100%'
  },

  itemCounter: {
    marginLeft: 5,
    color: 'white',
  },

  headerTitle: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  userName: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 25,
  },

  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
})