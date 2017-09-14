/**
 * Created by mostafazahran on 9/13/17.
 */
import { fetchWeather } from '../actions/index';
import { SearchBar } from '../containers/search_bar'
import DispatchWire from './dispatch_wire';

export default class FetchWeatherToSearchBarWire extends DispatchWire{
    constructor() {
        return super(SearchBar, fetchWeather, 'weather')
    }
}