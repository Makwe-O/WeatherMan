import axios from 'axios';
import apiKey from './rapidApi';

const makeRequest = (searchTerm, options = { method: 'GET' }) => {
  return axios({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather',
    method: options.method,
    params: { q: searchTerm },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    }
  }).then(response => response.data);
};

export default makeRequest;
