import axios from "axios";
import apiKey from "./rapidApi";

const makeRequest = (searchTerm, options = { method: "GET" }) => {
  return axios({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    method: options.method,
    params: {
      q: searchTerm,
      units: "metric",
      APPID: apiKey
    }
  }).then(response => response.data);
};

export default makeRequest;
