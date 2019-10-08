import React from 'react';
const WeatherDetails = props => {
  console.log(props);
  return (
    <div className='my-32 text-gray-200 '>
      <h2 className='text-3xl font-medium mb-10'>Weather Details</h2>
      {props.result.name ? (
        <div>
          <div className='text-l my-8 flex justify-between'>
            <div>
              <p>Temperature</p>
            </div>
            <div>
              <p>{props.result.main.temp}F</p>
            </div>
          </div>
          <div className='text-l my-8 flex justify-between'>
            <div>
              <p>Humidity</p>
            </div>
            <div>
              <p>{props.result.main.humidity}%</p>
            </div>
          </div>
          <div className='text-l my-8 flex justify-between'>
            <div>
              <p>Wind</p>
            </div>
            <div>
              <p>{props.result.wind.speed}km/h</p>
            </div>
          </div>
          <div className='text-l my-8 flex justify-between'>
            <div>
              <p>Pressure</p>
            </div>
            <div>
              <p>{props.result.main.pressure}hPa</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WeatherDetails;
