import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar';
import ResultTab from './components/resultTab/resultTab';
import makeRequest from './utils/axios';
import { ReactComponent as Rain } from './assets/rain.svg';

class App extends Component {
  state = {
    searchResult: '',
    weatherData: {},
    weatherIcon: null,
    background: null
  };

  handlebackgroundImage = data => {
    console.log('I was called');
    switch (data) {
      case 'Thunderstorm':
        this.setState({
          background:
            'https://res.cloudinary.com/dnavbc7ny/image/upload/v1570493278/Weather%20App/dark-lightning-night-56614.jpg'
        });
        break;

      case 'Drizzle':
        this.setState({
          background:
            ' https://res.cloudinary.com/dnavbc7ny/image/upload/v1570494052/Weather%20App/blur-colorful-colourful-21492.jpg'
        });
        break;

      case 'Clouds':
        this.setState({
          background:
            'https://res.cloudinary.com/dnavbc7ny/image/upload/v1570479715/Weather%20App/clouds-cloudy-cold-167699.jpg'
        });
        break;

      case 'Rain':
        this.setState({
          background:
            'https://res.cloudinary.com/dnavbc7ny/image/upload/v1570494482/Weather%20App/bright-environment-flora-1463530.jpg'
        });
        break;

      case 'Clear':
        this.setState({
          background:
            ' https://res.cloudinary.com/dnavbc7ny/image/upload/v1570494365/Weather%20App/atmosphere-blue-sky-clouds-631342.jpg'
        });
        break;

      default:
        this.setState({
          background:
            'https://res.cloudinary.com/dnavbc7ny/image/upload/v1570479715/Weather%20App/clouds-cloudy-cold-167699.jpg'
        });
    }
  };

  handleChange = e => {
    this.setState({
      searchResult: e.target.value
    });
  };

  async componentDidMount() {
    try {
      const req = await makeRequest('Lagos', { method: 'GET' });
      await this.setState({
        weatherData: req
      });
      this.handlebackgroundImage(this.state.weatherData.weather[0].main);
    } catch (error) {
      console.log('An error occured', error);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const req = await makeRequest(this.state.searchResult, { method: 'GET' });
      await this.setState({
        weatherData: req
      });
      this.handlebackgroundImage(this.state.weatherData.weather[0].main);
    } catch (error) {
      console.log('An error occured', error);
    }
  };

  render() {
    return (
      <div
        className='flex bg-contain bg-no-repeat'
        style={{
          background: `linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.1)), url(${this.state.background})`
        }}
      >
        <div className=' px-20 w-3/4  h-12 h-screen relative'>
          <div className=' mt-4 flex'>
            <div className='w-10'>
              <Rain />
            </div>
            <h3 className='text-gray-200'>WeatherMan</h3>
          </div>
          <div className='container'>
            <ResultTab result={this.state.weatherData} />
          </div>
        </div>

        <div class='w-1/4 h-12 h-screen relative'>
          <div
            style={{
              filter: 'blur(4px)',
              background:
                'linear-gradient(180deg, rgba(99,179,237,0.1) 0%, rgba(0,0,0,1) 100%)'
            }}
            className='absolute  h-screen w-full'
          ></div>
          <div className='absolute'>
            <Sidebar
              onSearchchange={this.handleChange}
              onSearchSubmit={this.handleSubmit}
              result={this.state.weatherData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
