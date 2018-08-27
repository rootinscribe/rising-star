import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import styles from './dashboard-style'
import Footer from '../footer/footer.component'
import DashboardHeader from './dashboardHeader.component'
import { ENVIRONMENT } from '../environment/environment'
import getItemsCount from '../../redux/selectors/getItemsCount'


class Dashboard extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {
      trucks: [],
    }
    this.pullTrucks()
  }

  pullTrucks() {
    fetch(ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.GET_TRUCKS)
      .then(response => response.json())
      .then((trucks => this.setState({ trucks })))
  }

  navigateToTruck = (truck) => {
    const { truckId, navigation } = this.props
    if (truckId === 0 || truckId === truck.id) {
      navigation.navigate('truck', { truck: truck })
    } else {
      alert(`You can't add products from other trucks, cancel or finish your current order`)
    }
  }

  render() {
    const { navigation, itemsCount } = this.props
    const { trucks } = this.state

    return (
      <View style={styles.container}>
        <DashboardHeader navigation={navigation} itemsCount={itemsCount} />
        <View style={styles.background}>
          <FlatList
            data={trucks}
            renderItem={({ item: truck }) =>
              <TouchableOpacity style={styles.cardContainer} onPress={() => this.navigateToTruck(truck)}>
                <Image style={styles.truckImage} source={{ uri: truck.images[0].url }} />
                <View style={styles.truckInfo}>
                  <View style={styles.truckInfoRight}>
                    <Text style={styles.truckName}>{truck.name}</Text>
                    <Text style={styles.truckInfoGreyFont}>{truck.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            }
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
        <Footer navigation={navigation} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  itemsCount: getItemsCount(state.order.items),
  truckId: state.order.truckId,
})

export default connect(mapStateToProps)(Dashboard)