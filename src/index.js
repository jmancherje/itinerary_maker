import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import reducer from './reducers'
import Counter from './components/counter'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
  <Counter 
    value={store.getState()}
    onIncrement={() => 
      store.dispatch({
        type: 'INCREMENT'
      })
    }
    onDecrement={() => 
      store.dispatch({
        type: 'DECREMENT'
      })
    }
  />,
  document.querySelector('#root')
  )
}

store.subscribe(render)
render()


// toggle todo function:
const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const toggleTodoWithSpread = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};