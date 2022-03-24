import React from 'react'
import { useStore } from "effector-react";
import $store, { setNewTodo, addTodo } from './store';
import List from "./components/List";

const App = () => {
  const store = useStore($store);

  const onSave = (e) => {
    e.preventDefault();
    addTodo();
  }

  return (
    <section className="vh-100" style={{backgroundColor : "#eee"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">

                <h4 className="text-center my-3 pb-3">To Do App</h4>

                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <div className="col-12">
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a task here"
                        value={store.newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary" onClick={onSave}>Save</button>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-warning">Get tasks</button>
                  </div>
                </form>
                 <List />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;
