import React from 'react';
import PropTypes from 'prop-types';
import previousArrow from './arrow.svg';

const Previous = (props) => {
    return <div className="prev-arrow" onClick={props.clickPrev}>
        <img src={previousArrow} alt="previous"/>
    </div>
}

Previous.propTypes = {
    clickPrev: PropTypes.func,
}

export default Previous;