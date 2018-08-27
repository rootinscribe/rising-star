import { createAction, handleActions } from 'redux-actions'

// ACTIONS
export const ADD_CURRENT_PERSON = 'truckr/login/ADD_CURRENT_PERSON'
export const CLEAR_CURRENT_PERSON = 'truckr/login/CLEAR_CURRENT_PERSON'

// REDUCER
const getInitialState = {
  currentPerson: undefined,
}

const reducer = handleActions(
  {
    [ADD_CURRENT_PERSON](state, action) {
      const {
        id,
        accessKey,
        secretKey,
        region,
      } = action.payload
      return {
        currentPerson: {
          id,
          accessKey,
          secretKey,
          region,
        },
      }
    },

    [CLEAR_CURRENT_PERSON](state, action) {
      return getInitialState
    },
  },
  getInitialState,
)

export default reducer

// ACTION CREATORS

export const addCurrentPerson = (id, accessKey, secretKey, region) => {
  return createAction(ADD_CURRENT_PERSON)({ id, accessKey, secretKey, region })
}

export const clearCurrentPerson = () => {
  return createAction(CLEAR_CURRENT_PERSON)({})
}