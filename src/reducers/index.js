import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT, ADD_TODO, TOGGLE_TODO } from '../actions'
import todos from './todos'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter,
  todos
})

export default rootReducer