import React from 'react';
import classes from './Contact.module.scss';


const Contact = (props) =>{
	return(
		<section className={classes.contactList}>
			<ul>
				<li>
					<img src={require('../../../assets/img/av.default.png')} alt="portfolio" />
				</li>
				<li>Mohammad</li>
				<li>Ahmad@gmail.com</li>
				<li>
					<img
						className={classes.iconImg}
						src={require('../../../assets/img/user-edit-solid.svg')}
						alt="edit"
					/>{' '}
				</li>
				<li>
					<img
						className={classes.iconImg}
						src={require('../../../assets/img/times-solid.svg')}
						alt="remove"
					/>{' '}
				</li>
			</ul>
		</section>
	)
}

export default Contact;