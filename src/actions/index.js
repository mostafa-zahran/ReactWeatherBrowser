import Axios from 'axios';
const API_KEY = 'ece65e4c1820662d2a7b1c92104e1b60';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = Axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}