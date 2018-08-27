import React from 'react'
import styles from './sign-up-style'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { ENVIRONMENT } from '../environment/environment'

export default class SignUp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      isEmailValid: false,
    }
  }


  static navigationOptions = { header: null }

  submit = () => {
    const user = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    }
    const { isEmailValid } = this.state

    if (this.state.name && this.state.lastName && this.state.email && this.state.password && this.state.confirmPassword) {
      if (this.state.password === this.state.confirmPassword) {
        isEmailValid ? this.signUp(user) : alert('Invalid email address')
      } else {
        alert('Password does not match the confirm password')
      }
    } else {
      alert('Do not leave empty spaces')
    }
  }

  signUp = async (user) => {
    try {
      let response = await fetch(ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.SAVE_USER, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      let id = await response.json()
      if (response.status === 200) {
        this.props.navigation.navigate('login')
      } else if (response.status === 403) {
        alert('User already exists')
      } else if (response.status === 500) {
        alert('Internal server error')
      }
    } catch (error) {
      alert(error.message)
    }
  }

  validateEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    reg.test(email) ? this.setState({ isEmailValid: true }) : this.setState({ isEmailValid: false })
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.centeredItems}>
        <Image style={styles.backgroundImage}
          source={
            require('../../../assets/images/loginBackground.jpg')
          }
          blurRadius={5} />
        <View style={[styles.signUpForm, styles.centeredItems]}>
          <Image style={styles.logo} source={require('../../../assets/logos/logoWithBackground_burned.png')} />
          <View style={[styles.inline, styles.signUpFormRow]}>
            <View style={styles.rowLeft}>
              <Text style={styles.signUpLabels}>First Name</Text>
              <TextInput
                underlineColorAndroid='transparent'
                style={styles.signUpFormInput}
                onChangeText={name => this.setState({ name })}
              />
            </View>

            <View style={styles.rowRight}>
              <Text style={styles.signUpLabels}>Last Name</Text>
              <TextInput
                underlineColorAndroid='transparent'
                style={styles.signUpFormInput}
                onChangeText={lastName => this.setState({ lastName })}
              />
            </View>
          </View>

          <View style={styles.signUpFormRow}>
            <Text style={styles.signUpLabels}>Email</Text>
            <TextInput
              underlineColorAndroid='transparent'
              autoCapitalize='none'
              textContentType='emailAddress'
              style={styles.signUpFormInput}
              onChangeText={(email) => {
                this.setState({ email })
                this.validateEmail(email);
              }}
            />
          </View>

          <View style={styles.signUpFormRow}>
            <Text style={styles.signUpLabels}>Password</Text>
            <TextInput
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              style={styles.signUpFormInput}
              onChangeText={(password) => { this.setState({ password }) }}
            />
          </View>

          <View style={styles.signUpFormRow}>
            <Text style={styles.signUpLabels}>Confirm Password</Text>
            <TextInput
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              style={styles.signUpFormInput}
              onChangeText={(confirmPassword) => { this.setState({ confirmPassword }) }}
            />
          </View>

          <TouchableOpacity style={[styles.button, styles.centeredItems]} onPress={() => this.submit() }>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.already}>Already have an account?
                <Text style={styles.clickHere} onPress={() => navigation.navigate('login')}> CLICK HERE</Text>
          </Text>
        </View>
      </View>
    )
  }
}
