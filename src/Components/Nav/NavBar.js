import React from "react";
import classes from "./NavBar.module.scss";
import {Link} from "react-router-dom"


const NavBar =(props) =>{

    const logouthandler= ()=>{
        sessionStorage.setItem("loginStatus", "");
        sessionStorage.setItem("state", "");
        props.updateLoginState("");
    }
    let navBtns = <>
                    <li><Link to="/login">LogIn</Link></li>
                    <li><Link to= "/register">Register</Link></li>
                </>
    if(props.loginStatus === 'true'){
        navBtns = 
            <>
                <li><p>{JSON.parse(sessionStorage.getItem('state')).name}</p></li>
                <li><Link to="/" onClick={logouthandler}>Logout</Link></li>
            </>
    }
    return(
        <nav className={classes.navbar}>
            <h2><Link to="/">Maily</Link></h2>
            <ul>
                {navBtns}
            </ul>
        </nav>
    );
 }

export default NavBar;