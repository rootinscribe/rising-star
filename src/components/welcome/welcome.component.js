import React, { Component } from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import styles from './welcome-style'
import Swiper from 'react-native-swiper'

export default class Welcome extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {
      sliderImages: [
        {
          title: 'Find Local Food Trucks',
          url: require('../../../assets/foods/burger-3442206_1920.jpg'),
        },
        {
          title: 'Enjoy Your Favorite Dishes',
          url: require('../../../assets/foods/french-fries-250641.jpg'),
        },
        {
          title: 'Save Your Favorite Food Trucks',
          url: require('../../../assets/foods/pizza-boxes-358029.jpg'),
        },
        {
          title: 'Order From Here',
          url: require('../../../assets/foods/tacos-1613795.jpg'),
        }
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Swiper
          onTouchEnd={(e, state, context) => {
            // console.warn(state)
            // if(state.index === this.state.sliderImages.length - 1) {
              this.props.navigation.navigate('login')
            // }
          }}
          dotColor='white'
          activeDotColor='#CB4640'
          paginationStyle={styles.paginationStyle}
          loop={false}
        >
          {
            this.state.sliderImages.map((item, i) =>
              <View style={styles.container} key={i}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <ImageBackground style={styles.image} source={item.url}>
                  <View style={styles.overlay} />
                </ImageBackground>
              </View>
            )
          }
        </Swiper>
      </View>
    )
  }
}
