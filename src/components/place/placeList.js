import React from 'react';
import PropTypes from 'prop-types';

const PlaceList = (props) => {
  const { country, capital, iso3 } = props;

  return (
    <button type="button">
      <div className="wrapper">
        <div className="countryInfo">
          <h1>{capital}</h1>
          <p>{country}</p>
        </div>
        <p>{iso3}</p>
      </div>
    </button>

  );
};

PlaceList.propTypes = {
  country: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  iso3: PropTypes.string.isRequired,
};

export default PlaceList;
