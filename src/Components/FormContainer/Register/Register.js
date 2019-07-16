import React from 'react';
import { Link } from 'react-router-dom';
import Classes from '../Form.module.scss';
import axios from 'axios';
class Register extends React.Component {
	state={
		failed: false,
		errors: []
	}
	nameRef = React.createRef();
	emailRef = React.createRef();
	passwordRef = React.createRef();
	paswordConfirmRef = React.createRef();

	validation(obj){
		let errors = [];
		let isValid= true;
		const emailReg= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		if(obj.name.trim().length < 2){
			errors.push({msg: "Please enter your Full name"});
			isValid= false;
		}
		if(!emailReg.test(obj.email)){
			errors.push({msg: "Please enter your email address"});
			isValid=false;
		}
		if(obj.password.trim().length < 6){
			errors.push({msg: "Your password should be more than 6 letter"});
			isValid=false;
		}
		if(obj.password !== obj.password2 ){
			errors.push({msg: "Your password should match the confirm password"});
			isValid=false;
		}
		this.setState({errors,failed: true});
		return isValid;
	}
	addNewUser = (e) =>{
		e.preventDefault();
		let obj = {
			name : this.nameRef.current.value,
			email : this.emailRef.current.value,
			password : this.passwordRef.current.value,
			password2 : this.paswordConfirmRef.current.value
		}
		if(this.validation(obj)){
			axios.post('/newUser',{...obj})
			  .then(response =>{
				  console.log(response)
				if(response.data.status === "success"){
					this.setState({failed : false});
					window.location.pathname = "/login"
				}else{
					this.setState({failed : true});
					this.passwordRef.current.value = "";
					this.paswordConfirmRef.current.value = "";
					this.setState({errors: response.data.errors});
				}
				}).catch( err =>{
					this.setState({errors: [{msg: "There was a problem with server, Please try again later."}]});
				})
		}else{
			this.passwordRef.current.value= "";
			this.paswordConfirmRef.current.value = "";
		}
	};
	render() {
		console.log(this.state.errors);
		return (
			<section className={Classes.containerForm}>
				<h1>
					<img src={require('../../../assets/img/user-plus-solid.svg')} alt="user-img" />Register
				</h1>
				{this.state.errors.map((error, index) => <p className={Classes.error} key={index}>{error.msg}</p>)}
				<form onSubmit={this.addNewUser}>
					<label>Name</label>
					<input type="text" placeholder="Enter Name" ref={this.nameRef} />
					<label>Email</label>
					<input type="email" placeholder="Enter Email" ref={this.emailRef} />
					<label>Password</label>
					<input type="password" placeholder="Create Password" ref={this.passwordRef} />
					<label>Confirm Password</label>
					<input type="password" placeholder="Confirm Password" ref={this.paswordConfirmRef} />
					<input type="submit" value="Register" />
				</form>
				<p>
					Have An Account? <Link to="/login">Login</Link>
				</p>
			</section>
		);
	}
}

export default Register;
