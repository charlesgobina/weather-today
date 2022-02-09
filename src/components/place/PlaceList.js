import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PlaceList = (props) => {
  const { country, capital, iso3 } = props;
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => navigate(`/details/${capital}`)}>
        <div className="wrapper">
          <div className="countryInfo">
            <h1>{capital}</h1>
            <p>{country}</p>
          </div>
          <p>{iso3}</p>
        </div>
      </button>
    </>
  );
};

PlaceList.propTypes = {
  country: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  iso3: PropTypes.string.isRequired,
};

export default PlaceList;
