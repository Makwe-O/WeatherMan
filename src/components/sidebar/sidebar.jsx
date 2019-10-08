import React from 'react';
import Search from '../search/search';
import WeatherDetails from '../weatherDetails/weatherDetails';
const Sidebar = ({ onSearchchange, onSearchSubmit, result }) => {
  return (
    <div className='px-10 '>
      <Search onSearchchange={onSearchchange} onSearchSubmit={onSearchSubmit} />
      <WeatherDetails result={result} />
    </div>
  );
};

export default Sidebar;
