import React from 'react';

const Search = ({ onSearchchange, onSearchSubmit }) => {
  return (
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
  );
};

export default Search;
