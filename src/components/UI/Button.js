 import React from "react";
import Styles from './Button.module.css';


const Button = props => {
    return (
        // added fallback type for button 
        <button type={props.type || 'button'} className={Styles.button} onClick={props.onClick}>{props.children}</button>
    );
};

export default Button;