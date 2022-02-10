import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import icon from '../images/day/179.png';
import './Place.css';

const PlaceList = (props) => {
  const { country, capital, iso3 } = props;
  const navigate = useNavigate();

  return (
    <div className="indiCap">
      <button className="locationCard" type="button" onClick={() => navigate(`/details/${capital}`)}>
        <div className="infoWrapper">
          <img src={icon} alt="cloud logo" />
          <div className="locationInfo">
            <h1 className="locName">{capital}</h1>
            <p className="locCoun">{country}</p>
          </div>
          <p className="locRegion">{iso3}</p>
        </div>
      </button>
    </div>
  );
};

PlaceList.propTypes = {
  country: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  iso3: PropTypes.string.isRequired,
};

export default PlaceList;
