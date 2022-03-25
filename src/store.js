import { createEvent, createStore } from 'effector';

export const setNewTodo = createEvent();
export const addTodo = createEvent();
export const toggleTodo = createEvent();
export const deleteTodo = createEvent();

const addTodoList = (todos, text) => [
  ...todos,
  {
    id: Math.floor(Math.random() * 21),
    done: false,
    text
  }
]

const toggleTodoList = (todos, id) => {
  return todos.map(todo => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }))
}

const deleteTodoList = (todos, id) => todos.filter(todo => +todo.id !== +id);

export default createStore({
  todos: [],
  newTodo: ''
}).on(setNewTodo, (state, newTodo) => ({...state, newTodo}))
  .on(addTodo, (state) => ({
    ...state,
    newTodo: '',
    todos: addTodoList(state.todos, state.newTodo)
  }))
  .on(toggleTodo, (state, id) => ({
    ...state,
    todos: toggleTodoList(state.todos, id)
  }))
  .on(deleteTodo, (state, id) => ({
    ...state,
    todos: deleteTodoList(state.todos, id)
  }))
