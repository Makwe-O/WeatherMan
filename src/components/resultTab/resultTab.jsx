import React from 'react';
import moment from 'moment';
import { ReactComponent as Cloudy } from '../../assets/cloudy.svg';
const ResultTab = props => {
  console.log(props);

  return (
    <div className='text-gray-200 absolute bottom-0 mb-32 w-full flex  items-center'>
      {props.result.main ? (
        <>
          <div className='px-8'>
            <h1 className='font-sans text-6xl font-semibold'>
              {props.result.main.temp}F
            </h1>
          </div>
          <div className='px-8'>
            <h2>{props.result.name}</h2>
            <p>
              {moment().format('LT')} - {moment().format('LL')}
            </p>
          </div>
          <div>
            <div className='w-8 items-center'>
              <Cloudy />
            </div>

            <p>{props.result.weather[0].main}</p>
          </div>
        </>
      ) : (
        <h2>Please type a location in the search bar</h2>
      )}
    </div>
  );
};

export default ResultTab;
