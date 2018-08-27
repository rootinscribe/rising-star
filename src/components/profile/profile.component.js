import React from 'react'
import styles from './profile-style'
import { View, Text, Image, TextInput } from 'react-native'
import { Icon, Header } from 'react-native-elements'
import Footer from '../footer/footer.component'
import { connect } from 'react-redux'
import { ENVIRONMENT } from '../environment/environment'
import { BuildRoute } from '../../redux/selectors/routeBuilder'

class Profile extends React.Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      person: {},
    }
    this.pullPersonProfile()
  }

  pullPersonProfile = async () => {
    try {
      const url = ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.GET_PROFILE
      const params = { id: this.props.currentPersonId }
      const route = BuildRoute(url, params)
      const response = await fetch(route, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .catch((error) => {
          alert(`Your profile can't be retrieved, please try again later`)
        })

      if (response.status === 200) {
        const person = await response.json()
        this.setState({
          person: person,
        })
      } else {
        alert(`An error occurred while trying to retrieve your profile`)
      }
    } catch (error) {
      alert(`Your profile can't be retrieved, please try again later`)
    }
  }

  renderHeader() {
    return (
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={<Text style={styles.title}>Profile</Text>}
        rightComponent={<Icon name='settings' type='material-community' color='white' />}
        outerContainerStyles={styles.header}
      />
    )
  }

  isProfileImageEmpty = () => {
    const defaultPersonImage = `https://s3-us-west-2.amazonaws.com/truckr-dev/blank-profile-picture.png`
    const { person } = this.state
    if (person.imageId) {
      return person.imageId.url
    } else {
      return defaultPersonImage
    }
  }

  render() {
    const { navigation } = this.props
    const { person } = this.state

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={styles.background}>
          <Image style={styles.avatar} source={{ uri: this.isProfileImageEmpty() }} />
          <View style={styles.personalInformation}>
            <View style={styles.userName}>
              <Text underlineColorAndroid='transparent' style={styles.firstName}>{person.name + ' ' + person.lastName}</Text>
            </View>
          </View>
        </View>
        <Footer navigation={navigation} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPersonId: state.session.currentPerson.id,
})

export default connect(mapStateToProps)(Profile)