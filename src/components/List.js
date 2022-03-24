import React from 'react';
import { useStore } from "effector-react";
import $store from "../store";

const List = () => {
  const store = useStore($store);
  console.log(store)
  return (
    <table className="table mb-4">
      <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Todo item</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      {store.todos.map(todo => (
        <tr key={todo.id}>
          <th scope="row">№</th>
          <td>{todo.text}</td>
          <td>{todo.status}</td>
          <td>
            <button type="submit" className="btn btn-danger">Delete</button>
            <button type="submit" className="btn btn-success ms-1">Finished</button>
          </td>
        </tr>
       ))
      }
      </tbody>
    </table>
  )
}

export default List;
