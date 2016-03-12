export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

// // const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE'

// export function increment() {
//   return {
//     type: INCREMENT
//   }
// }

// export function decrement() {
//   return {
//     type: DECREMENT
//   }
// }


// //////////////////////////////////////////////////////////

// export function fetchPeople() {
//   return {
//     type: FETCH_PEOPLE
//   }
// }

// export function receivePeople(data) {
//   return {
//     type: RECEIVE_PEOPLE,
//     people: data,
//     receivedAt: Date.now()
//   }
// }

// export function increment(data) {
//   return {
//     type: INCREMENT
//   }
// }