import React from 'react';
import Location from './locations';
import WeatherData from './weatherData';

const WeatherLocation = () => (
    <div>
        <Location city={'Buenos Aires'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;