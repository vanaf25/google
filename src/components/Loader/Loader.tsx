import React from 'react';
import loader from './../../images/loader.gif'
const Loader = () => {
    return (
            <img style={{
                maxWidth:"100%",
                margin:"0 auto",
                display:"block",
            }} src={loader} alt="loader"/>
    );
};

export default Loader;
