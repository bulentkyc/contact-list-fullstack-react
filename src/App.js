import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/Nav/NavBar';
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route  path="/register/" component={Register} /> */}
          {/* <Route  path="/login/" component={Login} /> */}
          <Route  path="/dashboard/" component={DashBoard} />
          {/* <Route component={NotExist} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
