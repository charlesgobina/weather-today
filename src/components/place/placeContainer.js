import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PlaceList from './placeList';

const PlaceContainer = () => {
  let cities = useSelector((state) => state.placeReducer);
  cities = cities.splice(Math.floor(Math.random() * 10), 30);

  return (
    <div>
      { cities.map((city) => (
        <PlaceList
          key={uuidv4()}
          country={city.name}
          capital={city.capital}
          iso3={city.iso3}
        />
      )) }
    </div>
  );
};

export default PlaceContainer;
