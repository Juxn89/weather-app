import React from 'react';
import { PropTypes } from 'prop-types';
import './style.css';

const Location = ({city}) => {
    // const city = props.city;
    // const {city} = props; // destructuring - desctructuración
    return (
        <div className="LocationCont">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired
};
export default Location;