/**
 * Created by mostafazahran on 9/13/17.
 */
import React, {Component} from 'react'
import WeatherReducerToWeatherListWire from '../connections/weather_reducer_to_weather_list'
import Chart from '../components/chart';

export class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map((weather)=> weather.main.temp);
        const humidities = cityData.list.map((weather)=> weather.main.humidity);
        const pressures = cityData.list.map((weather)=> weather.main.pressure);
        return(
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="black" units="hPa"/></td>
                <td><Chart data={humidities} color="green" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (<table className="table table-hover">
            <thead>
            <tr>
                <th>City</th>
                <th>Temperature (K)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
            </tr>
            </thead>
            <tbody>
            {this.props.WeatherReducer.map(this.renderWeather)}
            </tbody>
        </table>);
    };
}

export default new WeatherReducerToWeatherListWire();