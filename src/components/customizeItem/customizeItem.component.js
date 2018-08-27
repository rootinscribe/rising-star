import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Image, FlatList, TouchableOpacity, Modal, StatusBar } from 'react-native'
import styles from '../customizeItem/customizeItem-style'
import { Icon } from 'react-native-elements'
import { addOrderItem, addOrderTruckId } from '../../redux/modules/order'
import clone from '../../redux/selectors/clone'
import { includes, index } from '../../redux/selectors/arrayOperations'

class CustomizeItem extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    const { product, truck } = this.props.navigation.state.params
    this.state = {
      truck: truck,
      item: {
        product: product,
        amount: 1,
        ingredients: [],
      },
      refresh: true,
      selectedIngredients: clone(product.ingredients),
      isModalOpen: false,
    }
  }

  next = () => {
    if (this.state.selectedIngredients.length === 0) {
      alert('There are no selected ingredients')
    } else {
      this.setState((prevState) => ({
        item: {
          ...prevState.item,
          ingredients: prevState.selectedIngredients
        },
        isModalOpen: true,
      }))
    }
  }

  changeRefresh = () => {
    const { refresh } = this.state
    return !refresh
  }

  checkIngredient = (ingredient) => {
    let { selectedIngredients } = this.state
    if (includes(ingredient, selectedIngredients)) {
      let ingredientIndex = index(ingredient, selectedIngredients)
      selectedIngredients.splice(ingredientIndex, 1)
      this.setState({
        selectedIngredients: selectedIngredients,
        refresh: this.changeRefresh(),
      })
    } else {
      selectedIngredients.push(ingredient)
      this.setState({
        selectedIngredients: selectedIngredients,
        refresh: this.changeRefresh(),
      })
    }
  }

  isIngredientChecked = (ingredient) => {
    const { selectedIngredients } = this.state
    return includes(ingredient, selectedIngredients)
  }

  add = () => {
    const { item, truck } = this.state
    const { addOrderItem, addOrderTruckId } = this.props
    addOrderItem(item)
    addOrderTruckId(truck.id)
    this.props.navigation.navigate('truck', { truck: truck })
  }

  closeModal = () => {
    this.setState(() => ({ isModalOpen: false }))
  }

  incrementItemAmount = () => {
    this.setState((prevState) => ({
      item: {
        ...prevState.item,
        amount: prevState.item.amount + 1,
      }
    }))
  }

  decrementItemAmount = () => {
    this.setState((prevState) => ({
      item: {
        ...prevState.item,
        amount: Math.max(1, prevState.item.amount - 1),
      }
    }))
  }

  render() {
    const { navigation } = this.props
    const { item, refresh } = this.state
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.backButton}>
            <Icon name='ios-arrow-back' type='ionicon' size={35} color='white' onPress={() => navigation.goBack()} />
          </View>
          <Image style={styles.itemPicture} source={{ uri: item.product.imageId.url }} />
          <Text style={styles.productName}>{item.product.name}</Text>
        </View>
        <Text style={styles.title}>Customize Order</Text>
        <View style={styles.ingredientsList}>
          <FlatList
            data={item.product.ingredients}
            extraData={refresh}
            renderItem={({ item: ingredient }) =>
              <TouchableOpacity onPress={() => { this.checkIngredient(ingredient) }}>
                {
                  this.isIngredientChecked(ingredient)
                    ?
                    <View style={styles.ingredientContainer}>
                      <Text style={styles.ingredientChecked}>{ingredient.name}</Text>
                      <View style={styles.check}>
                        <Icon name='check' type='entypo' color='black' />
                      </View>
                    </View>
                    :
                    <Text style={styles.ingredientUnChecked}>{ingredient.name}</Text>
                }
              </TouchableOpacity>
            }
            keyExtractor={(_, index) => index.toString()} />
        </View>
        <TouchableOpacity style={styles.next} onPress={() => this.next()}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Modal visible={this.state.isModalOpen} transparent={true} onRequestClose={this.closeModal.bind(this) }>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => this.closeModal()}>
              <Icon name='x' type='feather' color='white' size={30} />
            </TouchableOpacity>
            <StatusBar barStyle='light-content' />
            <Text style={styles.quantityTitle}>Quantity</Text>
            <Text style={styles.number}>{item.amount}</Text>
            <View style={styles.inlineSymbols}>
              <TouchableOpacity onPress={this.incrementItemAmount}>
                <Text style={styles.symbols}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.decrementItemAmount}>
                <Text style={styles.symbols}>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.add()} style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addOrderItem,
    addOrderTruckId
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeItem)