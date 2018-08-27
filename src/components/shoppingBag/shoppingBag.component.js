import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { View, StatusBar, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import ShoppingBagHeader from './shoppingBagHeader.component'
import styles from './shoppingBag-style'
import { ENVIRONMENT } from '../environment/environment'
import { clearForNewOrder } from "../../redux/modules/order"


class ShoppingBag extends Component {

  static navigationOptions = { header: null }

  transformItemsForSend = (order) => {
    let itemsForSend = []
    for (let i = 0; i < order.items.length; i++) {
      let itemForSend = {
        productId: order.items[i].product.id,
        amount: order.items[i].amount,
        ingredients: this.transformIngredientsForSend(order.items[i].ingredients),
      }
      itemsForSend.push(itemForSend)
    }
    order = {
      ...order,
      items: itemsForSend,
    }
    return order
  }

  transformIngredientsForSend = (ingredients) => {
    let ingredientsForSend = []
    for (let i = 0; i < ingredients.length; i++) {
      let ingredientForSend = {
        ingredientId: ingredients[i].id,
      }
      ingredientsForSend.push(ingredientForSend)
    }
    return ingredientsForSend
  }

  buyOrder = () => {
    const order = this.transformItemsForSend(this.props.order)
    fetch(ENVIRONMENT.DEVELOPMENT.BASE_URL + ENVIRONMENT.DEVELOPMENT.SAVE_ORDER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Your order has been sent')
          this.newOrder()
          this.props.navigation.navigate('dashboard')
        } else {
          alert('Your order cannot be sent')
        }
      })
      .catch((error) => {
        alert('Error, please try again later')
      })
  }

  newOrder = () => {
    const { clearForNewOrder } = this.props
    clearForNewOrder()
  }

  render() {
    const { items, orderTax, orderSubtotal, orderTotal, navigation } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <ShoppingBagHeader navigation={navigation} />
        <FlatList
          data={items}
          renderItem={({ item }) =>
            <View style={styles.productContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={{ uri: item.product.imageId.url }} />
              </View>
              <View style={styles.productInfo}>
                <View style={styles.inlineInfo}>
                  <View style={styles.productName}>
                    <Text style={styles.bigFontSize}>{item.product.name} </Text>
                  </View>
                  <View style={styles.productPrice}>
                    <Text style={[styles.grey, styles.bigFontSize]}>$
                    <Text>{(item.product.price * item.amount).toFixed(2)}</Text></Text>
                  </View>
                </View>
                <Text style={[styles.grey]}>Quantity: <Text>{item.amount}</Text></Text>
                <View style={styles.ingredients}>
                  {
                    item.ingredients.map((ingredient, i) =>
                      <Text key={i} style={styles.grey}>{ingredient.name}</Text>
                    )
                  }
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.orderContainer}>
          <View style={styles.detailContainer}>
            <Text style={[styles.grey, styles.bigFontSize]}>$ <Text>{orderSubtotal}</Text></Text>
            <View style={styles.detailRow}>
              <View style={styles.detailName}>
                <Text style={[styles.grey, styles.bigFontSize]}>Tax</Text>
              </View>
              <View style={styles.detailValue}>
                <Text style={[styles.grey, styles.bigFontSize]}>$ <Text>{orderTax}</Text></Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <View style={styles.detailName}>
                <Text style={[styles.bigFontSize]}>Total</Text>
              </View>
              <View style={styles.detailValue}>
                <Text style={[styles.bold, styles.bigFontSize]}>$ <Text>{orderTotal}</Text></Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={this.buyOrder} style={styles.button}>
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
  items: state.order.items,
  orderTax: state.order.tax.toFixed(2),
  orderSubtotal: state.order.subtotal.toFixed(2),
  orderTotal: state.order.total.toFixed(2),
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearForNewOrder,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag)