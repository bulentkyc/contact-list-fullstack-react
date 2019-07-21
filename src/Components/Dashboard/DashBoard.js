import React from 'react';
import classes from "./DashBoard.module.scss";

class DashBoard extends React.Component{
   state= {userData: {}}
    componentDidMount(){
        console.log(sessionStorage.getItem('loginStatus'));
		if(sessionStorage.getItem('loginStatus') !== "true"){
			this.props.history.push('/login')
		}else{
            this.setState({userData: JSON.parse(sessionStorage.getItem('state'))})
        }
	}
    render(){
        console.log(this.state)
        return(
            <section className={classes.dashBoard}>
                <form action="/newContactList" >
                    <input type="text" name="name"/>
                    <input type="text" name="email"/>
                    <input type="file" name="file"/>
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}

export default DashBoard;