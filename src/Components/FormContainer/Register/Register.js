import React from 'react';
import { Link } from 'react-router-dom';
import Classes from '../Form.module.scss';

const Register = () => {
	return (
		<section className={Classes.containerForm}>
			<h1>
				<img src={require('../../../assets/img/user-plus-solid.svg')} alt="user-img" />Register
			</h1>
			<form>
				<label>Name</label>
				<input type="text" placeholder="Enter Name" />
				<label>Email</label>
				<input type="email" placeholder="Enter Email" />
				<label>Password</label>
				<input type="text" placeholder="Create Password" />
				<label>Confirm</label>
				<input type="text" placeholder="Confirm Password" />
				<input type="submit" value="Register" />
			</form>
			<p>
				Have An Account? <Link to="/login">Login</Link>
			</p>
		</section>
	);
};
export default Register;
