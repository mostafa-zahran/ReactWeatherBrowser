/**
 * Created by mostafazahran on 9/13/17.
 */
import React, {Component} from 'react'
import WeatherReducerToWeatherListWire from '../connections/weather_reducer_to_weather_list'

export class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        return(
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render() {
        return (<table className="table table-hover">
            <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
            </thead>
            <tbody>
            {this.props.WeatherReducer.map(this.renderWeather)}
            </tbody>
        </table>);
    };
}

export default new WeatherReducerToWeatherListWire();