import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/Nav/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          {/* <Router exact path="/" component={Home} /> */}
          {/* <Router  path="/register/" component={Register} /> */}
          {/* <Router  path="/login/" component={Login} /> */}
          {/* <Router  path="/dashboard/" component={DashBoard} /> */}
          {/* <Route component={NotExist} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
