import React from 'react';
import WeatherTemperature from '../weatherData/weatherTemperature';
import WeatherExtrainfo from '../weatherData/weatherExtrainfo';
import { SNOW } from '../../constants/weathers';
import './style.css';

const WeatherData = () => (
    <div className="weatherDataCont">        
        <WeatherTemperature temperature={20} weatherState={SNOW}/>
        <WeatherExtrainfo humidity={80} wind={'10 m/s'}/>
    </div>);

export default WeatherData;