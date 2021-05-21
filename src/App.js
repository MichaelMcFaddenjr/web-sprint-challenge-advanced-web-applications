import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage"
import PrivateRoute from "./components/PrivateRoute"
import "./styles.scss";


function App() {
  const logout = () => {
      localStorage.removeItem('token');
      window.location.href= '/';
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <button onClick= {logout} data-testid="logoutButton" href="#">logout</button>
        </header> 
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubbles' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.