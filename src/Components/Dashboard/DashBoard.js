import React from 'react';
import classes from './DashBoard.module.scss';
import Contact from './Contact/Contact';
import axios from "axios";


class DashBoard extends React.Component{
   state= {
        userData: {},
        contactList: [{id: 1},{id: 2}],
        failed: false,
        errors: []
}
    nameRef= React.createRef();
    emailRef= React.createRef();
    componentDidMount(){
        console.log(sessionStorage.getItem('loginStatus'));
		if(sessionStorage.getItem('loginStatus') !== "true"){
			// this.props.history.push('/login')
		}else{
            this.setState({userData: JSON.parse(sessionStorage.getItem('state'))})
        }
    }
    validation(obj) {
		let errors = [];
		let isValid = true;
		const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (obj.name.trim().length < 2) {
			errors.push({ msg: 'Please enter the full name' });
			isValid = false;
		}
		if (!emailReg.test(obj.email)) {
			errors.push({ msg: 'Please enter your email address' });
			isValid = false;
		}
		this.setState({ errors, failed: true });
		return isValid;
	}
    addContact = (e)=>{
        e.preventDefault();
		let obj = {
			name: this.nameRef.current.value,
			email: this.emailRef.current.value
		};
		if (this.validation(obj)) {
			axios
				.post('/newContact', { ...obj })
				.then((response) => {
					const contactList = [...response.data.contactList]

					console.log(contactList);
					if (response.data.status === 'success') {
                        this.setState({contactList});
						this.setState({failed : false});
					} else {
						this.setState({ failed: true });
						this.setState({ errors: response.data.errors });
					}
				})
				.catch((err) => {
					this.setState({ errors: [ { msg: 'There Was a problem with server, Please try again later' } ] });
				});
		}
    }
	render() {
        console.log(this.state)
		return (
			<>
				<section className={classes.containerForm}>
					<img
						className={classes.portfolioiImg}
						src={require('../../assets/img/av.default.png')}
						alt="portfolio"
					/>
                    {this.state.errors.map((error, index) => (
					<p className={classes.error} key={index}>
						{error.msg}
					</p>
				    ))}
					<form onSubmit={this.addContact}>
						<input type="text" name="name" placeholder="Please enter contact name" ref={this.nameRef} />
						<input type="text" name="email" placeholder="Please enter contact email" ref={this.emailRef}/>
						<input type="file" name="file" />
						<input type="submit" value="Submit" />
					</form>
				</section>
                {this.state.contactList.map(item => <Contact key={item.id} {...item} />)}
				
			</>
		);
	}
}
export default DashBoard;
