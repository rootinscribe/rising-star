import React, { Component } from 'react'
import { AsyncStorage, Text, TextInput, TouchableOpacity } from 'react-native'
import { Icon, Header } from 'react-native-elements'
import styles from './dashboardHeader-style'

export default class DashboardHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  updateSearchTerm = (searchTerm) => {
    this.setState(() => { searchTerm })
  }

  render() {
    const { navigation, itemsCount } = this.props

    return (
      <Header
        placement='left'
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={
          <TouchableOpacity style={styles.headerLeft}>
            <Icon name='search' color='white' />
            <TextInput
              style={styles.searchInput}
              placeholder='Search'
              placeholderTextColor='white'
              onChangeText={searchTerm => this.updateSearchTerm(searchTerm)}
              keyboardType='default'
              autoCapitalize='none'
            />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('shoppingBag')} >
            <Icon name='shopping-bag' type='entypo' color='white' />
            <Text style={styles.itemCounter}>{itemsCount}</Text>
          </TouchableOpacity>
        }
        outerContainerStyles={styles.header}
      />
    )
  }
}
