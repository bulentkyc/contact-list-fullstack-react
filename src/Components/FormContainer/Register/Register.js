import React from 'react';
import { Link } from 'react-router-dom';
import Classes from '../Form.module.scss';

class Register extends React.Component {
	nameRef = React.createRef();
	emailRef = React.createRef();
	passwordRef = React.createRef();
	paswwordConfirmRef = React.createRef();
	addNewUser = (e) =>{
		e.preventDefault();
		if(this.passwordRef.current.value === this.paswwordConfirmRef.current.value){
			let obj = {
				username : this.nameRef.current.value,
				email : this.emailRef.current.value,
				password : this.passwordRef.current.value,
			}
			window.location.pathname = "/login"
			fetch('/newUser',{
				method: 'POST',
				body: JSON.stringify({...obj}),
				headers: {"Content-Type": "application/json"}
			  })
			  .then((response)=> response.json())
			  .then(body =>{
				if(body === true){
					window.location.pathname = "/login"
				}
				}).catch( err =>{
					console.log(err);
				})
		}
	}
	render(){

	return (
		<section className={Classes.containerForm}>
			<h1>
				<img src={require('../../../assets/img/user-plus-solid.svg')} alt="user-img" />Register
			</h1>
			<form  onSubmit={this.addNewUser}>
				<label>Name</label>
				<input type="text" placeholder="Enter Name" ref={this.nameRef}  />
				<label>Email</label>
				<input type="email" placeholder="Enter Email" ref={this.emailRef}/>
				<label>Password</label>
				<input type="password" placeholder="Create Password" ref={this.passwordRef}/>
				<label>Confirm</label>
				<input type="password" placeholder="Confirm Password" ref={this.paswwordConfirmRef}/>
				<input type="submit" value="Register" />
			</form>
			<p>
				Have An Account? <Link to="/login">Login</Link>
			</p>
		</section>
	);
};
}

export default Register;
