import React from 'react';
import WeatherTemperature from './weatherTemperature';
import WeatherExtrainfo from './weatherExtrainfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature/>
        <WeatherExtrainfo humidity={80} wind={'10 m/s'}/>
    </div>);

export default WeatherData;