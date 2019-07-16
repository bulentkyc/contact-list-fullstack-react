import React from 'react';
import classes from "./DashBoard.module.scss";

class DashBoard extends React.Component{
    render(){
        return(
            <section className={classes.dashBoard}>
                <form action="/newContactList" >
                    <input type="text" name="name"/>
                    <input type="text" name="email"/>
                    <input type="file" name="file"/>
                    <button type="submit">Submit</button>
                    hello
                </form>
            </section>
        );
    }
}

export default DashBoard;