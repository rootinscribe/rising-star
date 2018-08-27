import React, { Component } from 'react'
import { View, Text, StatusBar, BackHandler } from 'react-native'
import ImageSlider from '../imageSlider/imageSlider.component'
import styles from '../truck/truck-style'
import MenuSlider from '../menuSlider/menuSlider.component'
import { ENVIRONMENT } from '../environment/environment'
import { BuildRoute } from '../../redux/selectors/routeBuilder'
import { Icon } from 'react-native-elements'

export default class TruckCard extends Component {

  constructor(props) {
    super(props)
    const { truck } = this.props.navigation.state.params
    this.state = {
      truck: truck,
      products: [],
    }
    this.pullProducts()
  }

  pullProducts() {
    const url = ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.GET_TRUCK_PRODUCTS
    const params = { truckId: this.state.truck.id }
    const route = BuildRoute(url, params)
    fetch(route, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((products) => {
        this.setState({ products: products })
      })
      .catch((error) => {
        alert('Products not found')
      })
  }

  static navigationOptions = { header: null }

  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.backButton}>
          <Icon name='ios-arrow-back' size={35} type='ionicon' color='white' onPress={() => navigation.navigate('dashboard')} />
        </View>
        <ImageSlider images={this.state.truck.images} />
        <View style={styles.truckNameContainer}>
          <Text style={styles.truckName}>{this.state.truck.name}</Text>
        </View>
        <View style={styles.menuTitleContainer}>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>
        <MenuSlider navigation={navigation} menu={this.state.products} />
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text textAlign='right' style={styles.about}>{this.state.truck.about}</Text>
        </View>
      </View>
    )
  }
}
