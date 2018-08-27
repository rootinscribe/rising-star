import { createAction, handleActions } from 'redux-actions'

// ACTIONS
export const ADD_ORDER_ITEM = 'truckr/order/ADD_ORDER_ITEM'
export const ADD_ORDER_CURRENT_PERSON_ID = 'truckr/order/ADD_ORDER_CURRENT_PERSON_ID'
export const CLEAR_ORDER = 'truckr/order/CLEAR_ORDER'
export const ADD_ORDER_TRUCK_ID = 'truckr/order/ADD_ORDER_TRUCK_ID'
export const CLEAR_FOR_NEW_ORDER = 'truckr/order/CLEAR_FOR_NEW_ORDER'

// REDUCER
const taxRate = 0.1
const feeRate = 0.09

const getInitialState = {
  items: [],
  subtotal: 0.00,
  fee: 0.00,
  tax: 0.00,
  total: 0.00,
  truckId: 0,
  personId: 0,
}

const reducer = handleActions(
  {
    [ADD_ORDER_ITEM](state, action) {
      const { item } = action.payload
      const subtotal = state.subtotal + item.product.price * item.amount
      const fee = subtotal * feeRate
      const tax = subtotal * taxRate
      const total = subtotal + fee + tax

      return {
        ...state,
        items: state.items.concat(item),
        subtotal,
        tax,
        fee,
        total,
      }
    },

    [ADD_ORDER_CURRENT_PERSON_ID](state, action) {
      const { id } = action.payload
      return {
        ...state,
        personId: id,
      }
    },

    [ADD_ORDER_TRUCK_ID](state, action) {
      const { id } = action.payload
      return {
        ...state,
        truckId: id,
      }
    },

    [CLEAR_ORDER](state, action) {
      return getInitialState
    },

    [CLEAR_FOR_NEW_ORDER](state, action) {
      return {
        ...state,
        items: [],
        subtotal: 0.00,
        fee: 0.00,
        tax: 0.00,
        total: 0.00,
        truckId: 0,
      }
    },
  },
  getInitialState,
)

export default reducer

// ACTION CREATORS

export const addOrderItem = (item) => {
  return createAction(ADD_ORDER_ITEM)({ item })
}

export const addOrderCurrentPersonId = (id) => {
  return createAction(ADD_ORDER_CURRENT_PERSON_ID)({ id })
}

export const addOrderTruckId = (id) => {
  return createAction(ADD_ORDER_TRUCK_ID)({ id })
}

export const clearOrder = () => {
  return createAction(CLEAR_ORDER)({})
}

export const clearForNewOrder = () => {
  return createAction(CLEAR_FOR_NEW_ORDER)({})
}