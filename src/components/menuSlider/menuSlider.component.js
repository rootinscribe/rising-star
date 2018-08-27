import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import styles from './menuSlider-style'

const MenuSlider = props => (
  <View style={styles.menuItemContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: props.item.imageId.url }} />
    </View>
    <Text style={styles.name}>{props.item.name}</Text>
    <Text style={styles.price}><Text>$ </Text>{props.item.price}</Text>
  </View>
)

export default class extends Component {
  render() {
    const { navigation } = this.props
    const { truck } = navigation.state.params
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.menu}
          horizontal={true}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => { navigation.navigate('customizeItem', { product: item, truck: truck}) }}>
              <MenuSlider
                item={item}
              />
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>
      </View>
    )
  }
}
