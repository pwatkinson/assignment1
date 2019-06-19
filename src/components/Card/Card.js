import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';
/*
    CSS modules allow you to reuse class names in different components
    class names are generated after you build the react app
    reduces likelihood of classes clashing
    If you target tags, you won't get the benefits of CSS modules
*/

const Card = (props) => {
    // object destructuring
    const { children } = props;
     
    return  (
        <div className={styles.card}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
}

export default Card;