import React from 'react';
import classes from './Contact.module.scss';

const Contact = (props) => {
	return (
		<section className={classes.contactList}>
			<ul>
				<li>
					<img src={require('../../../assets/img/av.default.png')} alt="portfolio" />
				</li>
				<li>{props.name}</li>
				<li>{props.email}</li>
				<li onClick={props.updateContactList}>
					<img
						className={classes.iconImg}
						src={require('../../../assets/img/user-edit-solid.svg')}
						alt="edit"
					/>{' '}
				</li>
<<<<<<< HEAD
				<li onClick={()=>props.deleteContactList(props._id)}>
=======
				<li onClick={props.sendEmail}>
					<img
						className={classes.iconImg}
						src={require('../../../assets/img/user-edit-solid.svg')}
						alt="edit"
					/>{' '}
				</li>
				<li onClick={props.deleteContactList}>
>>>>>>> 15dc0b1ca4153202325794255c3013952763884c
					<img
						className={classes.iconImg}
						src={require('../../../assets/img/times-solid.svg')}
						alt="remove"
					/>{' '}
				</li>
			</ul>
		</section>
	);
};

export default Contact;
