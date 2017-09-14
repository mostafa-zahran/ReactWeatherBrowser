/**
 * Created by mostafazahran on 9/10/17.
 */
import React, { Component } from 'react'
import FetchWeatherToSearchBarWire from '../connections/fetch_weather_to_search_bar_wire'

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    };

    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Get a five days forecast in your favourite cities"
                    className="form-control"
                    onChange={this.onInputChange}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit"> Submit </button>
                </span>
            </form>
        );
    }
}

export default new FetchWeatherToSearchBarWire();