import React from 'react'
import {useStore} from "effector-react";
import $store, {setNewTodo, addTodo, load} from './store';
import List from "./components/List";

const App = () => {
  const store = useStore($store);

  const onSave = e => {
    e.preventDefault();
    addTodo();
  }

  const getData = e => {
    e.preventDefault();
    load('https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json')
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-9">
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
                      <button className="btn btn-primary" disabled={!store.newTodo} onClick={onSave}>Save</button>
                    </div>
                    <div className="col-12">
                    <button className="btn btn-warning" onClick={getData}>Get tasks</button>
                  </div>
                  </form>
                  <List/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
