import React from 'react';

const Location = ({city}) => {
    // const city = props.city;
    // const {city} = props; // destructuring - desctructuración
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
};

export default Location;