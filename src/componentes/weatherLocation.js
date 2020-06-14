import React from 'react';
import Location from './locations';
import WeatherData from './weatherData';

const WeatherLocation = () => (
    <div>
        <Location city={'Managua'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;