import React from 'react';
import classes from './DashBoard.module.scss';
import Contact from './Contact/Contact';
import axios from 'axios';
// import DefaultImg from '../../assets/img/av.default.png';
import SendEmail from './SendEmail/SendEmail';

class DashBoard extends React.Component {
	state = {
		userData: {},
		contactList: [],
		selectedFile: null,
		failed: false,
		errors: [],
		sendEmailOpen: false
	};
	nameRef = React.createRef();
	emailRef = React.createRef();
	componentDidMount() {
		console.log(sessionStorage.getItem('loginStatus'));
		if (sessionStorage.getItem('loginStatus') !== 'true') {
			// this.props.history.push('/login');
		} else {
			this.setState({ userData: JSON.parse(sessionStorage.getItem('state')) }, () => {
				if (this.state.userData !== {}) {
					axios
						.get(`/getContactList/${this.state.userData.id}`)
						.then((res) => {
							console.log(res);

							if (res.data.status === 'success') {
								this.setState({ contactList: res.data.newContactData });
							} else {
							}
						})
						.catch((err) => {});
				}
			});
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
	uploadImage = (e) => {
		// stores a readable instance of
		// the image being uploaded using multer
		console.log(e.target.files[0]);
		this.setState({
			selectedFile: e.target.files[0],
			loaded: 0
		});
	};
	addContact = (e) => {
		e.preventDefault();
		let errors = [];
		let obj = {
			userID: this.state.userData.id,
			name: this.nameRef.current.value,
			email: this.emailRef.current.value
		};
		if (this.validation(obj)) {
			if (this.state.selectedFile === null) {
				obj.avatar = 'av.default.png';
				axios
					.post('/newContact', { ...obj })
					.then((res) => {
						console.log(res);
						const newContact = res.data.newContactData;
						let contactList = [ ...this.state.contactList ];
						contactList.push(newContact);
						if (res.data.status === 'success') {
							this.setState({ selectedFile: null, contactList: contactList, failed: false, errors: [] });
						} else {
							errors = [ ...res.data.errors ];
							this.setState({ failed: true, errors });
						}
					})
					.catch((err) => {
						errors.push({ msg: 'There Was a problem with server, Please try again later' });
						this.setState({ selectedFile: null, errors });
					});
			} else {
				const data = new FormData();
				data.append('file', this.state.selectedFile);
				console.log(data);
				axios
					.post('/uploadAvatar', data)
					.then((res) => {
						console.log(res);
						if (res.data.status === 'success') {
							obj.avatar = res.data.avatar;
							return true;
						} else {
							errors = [ ...res.data.errors ];
							this.setState({ errors });
							return false;
						}
					})
					.then((status) => {
						if (status) {
							console.log(obj);
							axios
								.post('/newContact', { ...obj })
								.then((res) => {
									console.log(res);
									const newContact = res.data.newContactData;
									let contactList = [ ...this.state.contactList ];
									contactList.push(newContact);
									if (res.data.status === 'success') {
										this.setState({
											selectedFile: null,
											contactList: contactList,
											failed: false,
											errors: []
										});
									} else {
										errors = [ ...res.data.errors ];
										this.setState({ failed: true, errors });
									}
								})
								.catch((err) => {
									errors.push({ msg: 'There Was a problem with server, Please try again later' });
									this.setState({ selectedFile: null, errors });
								});
						}
					});
			}

			e.target.reset();
		}
	};
	updateContactList = () => {};
	deleteContactList = (id) => {
		axios.get(`deleteContact/${id}`).then((res) => {
			if (res.data.status === 'success') {
				let newArrayContact = [ ...this.state.contactList ];
				let index = newArrayContact.findIndex((item) => item._id === id);
				if (index !== -1) {
					newArrayContact.splice(index, 1);
					this.setState({ contactList: newArrayContact });
				}
			} else {
				// error
			}
		});
	};
	sendEmail = (obj) => {
		this.setState({ sendEmailOpen: !this.state.sendEmailOpen });

		axios.post('/sendMail', { ...obj }).then((res) => {
			console.log(res);
		});
	};
	render() {
		return (
			<div>
				<section className={classes.containerForm}>
					<img
						className={classes.portfolioImg}
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
						<input type="text" name="email" placeholder="Please enter contact email" ref={this.emailRef} />
						<input type="file" name="file" onChange={this.uploadImage} />
						<input type="submit" value="Submit" />
					</form>
				</section>
				{this.state.contactList.map((item) => (
					<Contact
						key={item._id}
						{...item}
						updateContactList={this.updateContactList}
						sendEmail={this.sendEmail}
						deleteContactList={this.deleteContactList}
					/>
				))}

				{this.state.sendEmailOpen ? <SendEmail SendEmail={this.sendEmail} /> : null}
				{this.state.sendEmailOpen ? <div className={classes.blackBg} onClick={this.sendEmail} /> : null}
			</div>
		);
	}
}
export default DashBoard;
