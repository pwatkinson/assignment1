import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './TextArea.module.css';
/*
    CSS modules allow you to reuse class names in different components
    class names are generated after you build the react app
    reduces likelihood of classes clashing
    If you target tags, you won't get the benefits of CSS modules
*/


const TextArea = (props) => {
    // object destructuring
    const { placeholder } = props;
    
    const [name, setName] = useState();

    return (
        <textarea className={`${styles.textArea}`}
            onChange={(event) => setName(event.target.value)} placeholder={placeholder}>
        </textarea>        
    );
};

TextArea.propTypes = {
    placeholder: PropTypes.string   
}

export default TextArea;