import React from 'react';
import { useStore } from "effector-react";
import $store, {toggleTodo, deleteTodo} from "../store";

const List = () => {
  const store = useStore($store);

  const onDelete = (e) => {
    e.preventDefault();
    deleteTodo(e.target.dataset.id);
  }

  return (
    <table className="table mb-4">
      <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Status</th>
        <th scope="col">Text</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      {store.todos.map((todo, i) => (
        <tr key={todo.id} className={todo.done ? "p-3 mb-2 bg-light text-dark" : ''}>
          <th scope="row">{i + 1}</th>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
          </td>
          <td>
            {todo.done ? <p><s>{todo.text}</s></p> : <>{todo.text}</>}
          </td>
          <td>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={onDelete}
              data-id={todo.id}
            >Delete</button>
          </td>
        </tr>
       ))
      }
      </tbody>
    </table>
  )
}

export default List;
