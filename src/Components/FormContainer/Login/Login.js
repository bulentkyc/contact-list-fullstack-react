import React from 'react';
import { Link } from 'react-router-dom';
import Classes from '../Form.module.scss';
import axios from 'axios';

class Login extends React.Component {
	state = {
		failed: false,
		errors: []
	};
	emailRef = React.createRef();
	passwordRef = React.createRef();

	validation(obj) {
		let errors = [];
		let isValid = true;
		const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if (!emailReg.test(obj.email)) {
			errors.push({ msg: 'Please enter your email address' });
			isValid = false;
		}
		if (obj.password.trim().length < 6) {
			errors.push({ msg: 'Your password should be more than 6 letter' });
			isValid = false;
		}
		this.setState({ errors, failed: true });
		return isValid;
	}
	userLogged = (e) => {
		e.preventDefault();
		let obj = {
			email: this.emailRef.current.value,
			password: this.passwordRef.current.value
		};
		if (this.validation(obj)) {
			axios
				.post('/loginUser', { ...obj })
				.then((response) => {
					console.log(response);
					if (response.data.status === 'success') {
					this.props.history.push('/dashboard' ,{...response.data})
					} else {
						this.setState({ failed: true });
						this.passwordRef.current.value = '';
						this.setState({ errors: response.data.errors });
					}
				})
				.catch((err) => {
					this.setState({ errors: [ { msg: 'There Was a problem with server, Please try again later' } ] });
				});
		} else {
			this.passwordRef.current.value = '';
		}
	};
	render() {
		return (
			<section className={Classes.containerForm}>
				<h1>
					<img src={require('../../../assets/img/user-solid.svg')} alt="user-img" />Login
				</h1>
				<form>
					<label>Email</label>
					<input type="email" placeholder="Enter Email" ref={this.emailRef} />
					<label>Password</label>
					<input type="password" placeholder="Create Password" ref={this.passwordRef} />
					<input type="submit" value="Login" />
				</form>
				<p>
					Create a Account? <Link to="/register">Register</Link>
				</p>
			</section>
		);
	}
}
export default Login;
