import React from 'react'
import reactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import reducer from './reducers'
import Counter from './components/counter'

let store = createStore(reducer)

reactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)