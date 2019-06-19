import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';
/*
    CSS modules allow you to reuse class names in different components
    class names are generated after you build the react app
    reduces likelihood of classes clashing
    If you target tags, you won't get the benefits of CSS modules
*/


const Button = (props) => {
    // object destructuring
    const { children, handleClick } = props;
    
    console.log(children);
    return (
        <button type="button"
         className={`${styles.button}`}
         onClick={handleClick}>
            {children}
        </button>        
    );
};

Button.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Button;