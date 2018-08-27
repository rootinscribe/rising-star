import React, { Component } from 'react'
import { View, } from 'react-native'
import styles from './footer-style'
import { Icon } from 'react-native-elements'

export default class Footer extends Component {

  _search = () => {
    alert('Search')
  }

  _truck = () => {
    alert('Truck')
  }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.footer}>
        <Icon name='search' color='black' onPress={this._search} />
        <Icon name='truck' type='material-community' color='black' onPress={() => navigation.navigate('dashboard')} />
        <Icon name='user' type='feather' color='black' onPress={() => navigation.navigate('profile')} />
      </View>
    )
  }
}
