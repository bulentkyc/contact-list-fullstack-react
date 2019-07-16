import React from 'react';
import { Link } from 'react-router-dom';
import Classes from '../Form.module.scss';
import axios from 'axios';

class Register extends React.Component {
	state={
		failed: false
	}
	nameRef = React.createRef();
	emailRef = React.createRef();
	passwordRef = React.createRef();
	paswordConfirmRef = React.createRef();
	addNewUser = (e) =>{
		e.preventDefault();
		if(this.passwordRef.current.value === this.paswordConfirmRef.current.value){
			let obj = {
				name : this.nameRef.current.value,
				email : this.emailRef.current.value,
				password : this.passwordRef.current.value,
				password2 : this.paswordConfirmRef.current.value,
			}
			axios.post('/newUser',{...obj})
			  .then(response =>{
				  console.log(response)
				if(response.data.status === "success"){
					this.setState({failed : false});
					// window.location.pathname = "/login"
				}else{
					this.setState({failed : true});
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
				<input type="password" placeholder="Confirm Password" ref={this.paswordConfirmRef}/>
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
