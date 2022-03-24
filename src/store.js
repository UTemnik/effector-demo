import { createEvent, createStore } from 'effector';

export const setNewTodo = createEvent();
export const addTodo = createEvent();

const addTodoList = (todos, text) => [
  ...todos,
  {
    id: Math.floor(Math.random() * 21),
    done: false,
    status: 'new',
    text
  }
]

export default createStore({
  todos: [],
  newTodo: ''
}).on(setNewTodo, (state, newTodo) => ({...state, newTodo}))
  .on(addTodo, (state) => ({
    ...state,
    newTodo: '',
    todos: addTodoList(state.todos, state.newTodo)
  }))
