import React from 'react';
import WeatherTemperature from './weatherTemperature';
import WeatherExtrainfo from './weatherExtrainfo';
import { SNOW } from '../../../constants/weathers';
import './style.css';

const WeatherData = () => (
    <div className="weatherDataCont">        
        <WeatherTemperature temperature={20} weatherState={SNOW}/>
        <WeatherExtrainfo humidity={80} wind={'10m/s'}/>
    </div>);

export default WeatherData;