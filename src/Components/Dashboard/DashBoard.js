import React from 'react';
import classes from "./DashBoard.module.scss";

class DashBoard extends React.Component{
    state= {...this.props.location.state}
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