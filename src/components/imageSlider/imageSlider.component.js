import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './imageSlider-style'
import Swiper from 'react-native-swiper'

const ImageSlider = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.uri }} />
  </View>
)

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          dotColor='white'
          activeDotColor='#CB4640'
          paginationStyle={styles.paginationStyle}
          loop={false}
        >
          {
            this.props.images.map((item, i) =>
              <ImageSlider
                uri={item.url}
                key={i}
              />)
          }
        </Swiper>
      </View>
    )
  }
}
