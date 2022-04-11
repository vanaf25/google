import React from 'react';
import classes from './Home.module.css'
import Form from '../Form/Form';
import logo from './../../images/logo.png'
const Home = () => {
    return (
        <div className={classes.app}>
            <img className={classes.logo} src={logo} alt="logo"/>
            <Form/>
        </div>
    );
};

export default Home;
