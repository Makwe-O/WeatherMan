import React from 'react';
import { ReactComponent as Rain } from '../../assets/rain.svg';

const Search = ({ onSearchchange, onSearchSubmit }) => {
  return (
    <>
      <div className='block mt-4 flex sm:hidden'>
        <div className='w-10'>
          <Rain />
        </div>
        <h3 className='text-gray-200'>WeatherMan</h3>
      </div>
      <form onSubmit={onSearchSubmit}>
        <div className='flex items-center border-b border-b-2 border-blue-400 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-200'
            type='text'
            placeholder='Lagos'
            aria-label='Full name'
            onChange={onSearchchange}
          />
          <button
            className='flex-shrink-0 bg-blue-400 hover:bg-blue-700 border-blue-400 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
