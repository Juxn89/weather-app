import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtrainfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInforText">{`Humedad: ${humidity}%`}</span>
        <span className="extraInforText">{`Vientos: ${wind}`}</span>
    </div>
);

WeatherExtrainfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtrainfo;