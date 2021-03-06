import React, {Component} from 'react';
import Location from './locations';
import WeatherData from './weatherData/index';
import { SUN, WINDY } from '../../constants/weathers';
import './style.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 5,
    wind: '19 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Managua',
            data: data
        };
    }

    handleUpdateClick = () => {
        this.setState({
            city: 'Matearea',
            data: data2
        });
    }

    render = () => {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>)
}};

export default WeatherLocation;