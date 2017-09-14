/**
 * Created by mostafazahran on 9/13/17.
 */

import { WeatherList } from '../containers/weather_list';
import WeatherReducer from '../reducers/reducer_weather';

import StateWire from './state_wire';

export default class WeatherReducerToWeatherListWire extends StateWire{
    constructor() {
        return super(WeatherList, WeatherReducer)
    }
}