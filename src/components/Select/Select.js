import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.css';
/*
    CSS modules allow you to reuse class names in different components
    class names are generated after you build the react app
    reduces likelihood of classes clashing
    If you target tags, you won't get the benefits of CSS modules
*/


const Select = (props) => {
    // object destructuring
    const { children } = props;
 
    const [name, setName] = useState();

    console.log(children);
    return (
        <select className={`${styles.button}`}
         onChange={(event) => setName(event.target.value)}>
            {children}
        </select>        
    );
};

Select.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Select;