import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';
/*
    CSS modules allow you to reuse class names in different components
    class names are generated after you build the react app
    reduces likelihood of classes clashing
    If you target tags, you won't get the benefits of CSS modules
*/


const Input = (props) => {
    // object destructuring
    const { value } = props;

    const [name, setName] = useState(value);
    
    return (
        <input type="text" name="inputName" value={name} onChange={(event) => setName(event.target.value)} />
    );
};

Input.propTypes = {
    value: PropTypes.string   
}

export default Input;