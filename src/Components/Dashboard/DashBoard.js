import React from 'react';
import classes from './DashBoard.module.scss';

<<<<<<< HEAD
class DashBoard extends React.Component {
	state= {...JSON.parse(sessionStorage.getItem('state'))}
=======
class DashBoard extends React.Component{
   state= {userData: {}}
>>>>>>> 889fabb337d033240feb61f14d31b49be875f432
    componentDidMount(){
        console.log(sessionStorage.getItem('loginStatus'));
		if(sessionStorage.getItem('loginStatus') !== "true"){
			this.props.history.push('/login')
		}else{
            this.setState({userData: JSON.parse(sessionStorage.getItem('state'))})
        }
	}
	render() {
        console.log(this.state)
		return (
			<div>
				<section className={classes.containerForm}>
					<img
						className={classes.portfolioiImg}
						src={require('../../assets/img/av.default.png')}
						alt="portfolio"
					/>
					<form action="/newContactList">
						<input type="text" name="name" />
						<input type="text" name="email" />
						<input type="file" name="file" />
						<input type="submit" value="Submit" />
					</form>
				</section>
				<section className={classes.contactList}>
					<ul>
						<li>
							<img src={require('../../assets/img/av.default.png')} alt="portfolio" />
						</li>
						<li>Mohammad</li>
						<li>Ahmad@gmail.com</li>
						<li>
							<img
								className={classes.iconImg}
								src={require('../../assets/img/user-edit-solid.svg')}
								alt="edit"
							/>{' '}
						</li>
						<li>
							<img
								className={classes.iconImg}
								src={require('../../assets/img/times-solid.svg')}
								alt="remove"
							/>{' '}
						</li>
					</ul>
				</section>
			</div>
		);
	}
}
export default DashBoard;
