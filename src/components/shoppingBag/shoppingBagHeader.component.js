import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Icon, Header } from 'react-native-elements'
import styles from './shoppingBagHeader-style'

const ShoppingBagHeader = ({ navigation }) => (
  <Header
    placement='left'
    statusBarProps={{ barStyle: 'light-content' }}
    leftComponent={
      <Icon name='ios-arrow-back' style={styles.arrowBack} type='ionicon' color='white' onPress={() => navigation.goBack()} />
    }
    centerComponent={
      <Text style={styles.title}>    Bag</Text>
    }
    outerContainerStyles={styles.header}
  />
)

export default ShoppingBagHeader
