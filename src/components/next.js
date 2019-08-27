import React from 'react';
import PropTypes from 'prop-types';
import nextArrow from '../arrow.svg';

const Next = (props) => {
    return <div className="next-arrow" onClick={props.clickNext}>
        <img src={nextArrow} alt="next" />
    </div>
}

Next.propTypes = {
 clickNext: PropTypes.func,
}

export default Next;