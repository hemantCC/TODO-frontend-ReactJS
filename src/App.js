import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todos.component"
import EditTodo from "./components/edit-todos.component"
import TodosList from "./components/todos-list.component"

function App() {
  return (
    <Router>
      <div className="container">
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Todo Application</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Todo List <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Task</Link>
              </li>
            </ul>
          </div>
        </nav>

        
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
