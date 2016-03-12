import React, { Component } from 'react';












// let nextTodoId = 0;
// class TodoApp extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" ref="todoInput" />
//         <button onClick={() => {
//           store.dispatch({
//             type: 'ADD_TODO',
//             text: this.refs.todoInput.value,
//             id: nextTodoId++
//           });
//           this.refs.todoInput.value = '';
//         }}>
//           Add Todo
//         </button>
//         <ul>
//           {this.props.todos.map(todo => 
//               <li key={todo.id}>
//                 {todo.text}
//               </li>
//             )}
//         </ul>
//       </div>
//     )
//   }
// }