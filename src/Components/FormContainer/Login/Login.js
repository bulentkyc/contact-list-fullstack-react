import React from 'react';
import { Link } from 'react-router-dom';
import Classes from '../Form.module.scss';

const Login = () => {
	return (
		<section className={Classes.containerForm}>
			<h1>
				<img src={require('../../../assets/img/user-solid.svg')} alt="user-img" />Login
			</h1>
			<form action='/loginAuth' method='POST' enctype='multipart/form-data'>
				<label>Email</label>
				<input type="email" placeholder="Enter Email" />
				<label>Password</label>
				<input type="text" placeholder="Create Password" />
				<input type="submit" value="Login" />
			</form>
			<p>
				Create a Account? <Link to="/register">Register</Link>
			</p>
		</section>
	);
};
export default Login;
