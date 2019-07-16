import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Components/FormContainer/Register/Register';
import Login from './Components/FormContainer/Login/Login';
import NavBar from './Components/Nav/NavBar';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Switch>
					{/* <Route exact path="/" component={Home} /> */}
					<Route path="/register/" component={Register} />
					<Route path="/login/" component={Login} />
					{/* <Route  path="/dashboard/" component={DashBoard} /> */}
					{/* <Route component={NotExist} /> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
