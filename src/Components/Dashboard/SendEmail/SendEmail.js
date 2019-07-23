import React from 'react';
import classes from './SendEmail.module.scss';

const SendEmail = () => {
	return (
		<section className={classes.containerForm}>
			<form>
				<h1>
					<img src={require('../../../assets/img/av.default.png')} alt="img" />Mohammad
				</h1>
				<input type="email" placeholder="from" />
				<input type="password" placeholder="to" />
				<input type="text" placeholder="cc" />
				<textarea placeholder="your message" />
				<input type="file" name="file" />
				<input type="email" placeholder="gmail address" />
				<input type="password" placeholder="gmail password" />
				<input type="submit" value="Send" />
			</form>
		</section>
	);
};

export default SendEmail;
