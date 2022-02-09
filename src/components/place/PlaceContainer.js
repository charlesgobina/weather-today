import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PlaceList from './PlaceList';
import AutoForm from '../autoComplete/AutoForm';

const PlaceContainer = () => {
  let cities = useSelector((state) => state.placeReducer);
  cities = cities.splice(Math.floor(Math.random() * 10), 30);
  cities = cities.filter((city) => city.capital !== '');

  return (
    <div>
      <AutoForm />
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
