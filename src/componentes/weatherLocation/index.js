import React from 'react';
import Location from './locations';
import WeatherData from './weatherData/index';
import './style.css';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Managua'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;