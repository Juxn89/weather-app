import React from 'react';
import WeatherTemperature from './weatherTemperature';
import WeatherExtrainfo from './weatherExtrainfo';
import { SNOW } from '../constants/weathers';

const WeatherData = () => (
    <div>        
        <WeatherTemperature temperature={20} weatherState={SNOW}/>
        <WeatherExtrainfo humidity={80} wind={'10 m/s'}/>
    </div>);

export default WeatherData;