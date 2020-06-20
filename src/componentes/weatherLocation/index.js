import React from 'react';
import Location from './locations';
import WeatherData from './weatherData/index';
import { SUN } from '../../constants/weathers';
import './style.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Managua'}/>
        <WeatherData data={data}/>
    </div>
);

export default WeatherLocation;