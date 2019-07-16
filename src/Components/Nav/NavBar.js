import React from "react";
import classes from "./NavBar.module.scss";
import {Link} from "react-router-dom"


const NavBar = () =>{
    return(
        <nav className={classes.navbar}>
            <h2><Link to="/">Maily</Link></h2>
            <ul>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to= "/register">Register</Link></li>
            </ul>
        </nav>
    );
}


export default NavBar;