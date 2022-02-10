import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import getAutoComplete from '../../redux/autoComplete/thunk';
import icon from '../images/day/179.png';
import './AutoForm.css';

const AutoForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const newLocation = useSelector((state) => state.autoCompleteReducer.autoComplete);
  const loading = useSelector((state) => state.autoCompleteReducer.loading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAutoComplete(search));
  }, [search]);

  return (
    <div className="search">
      <form className="searchForm" onSubmit={() => navigate(`/details/${search}`)}>
        <input required type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter a Location" />
        <button type="submit">Search</button>
      </form>

      {loading ? <p className="notFound">Searching...</p>
        : (
          <>
            <h1 className="results">Search Results</h1>
            <div className="searchResults">
              { newLocation && newLocation.map((location) => (
                <button className="locationCard" type="button" key={uuidv4()} onClick={() => navigate(`/details/${location.name}`)}>
                  <img src={icon} alt="cloud logo" />
                  <div className="locationInfo">
                    <h1 className="locName">{location.name}</h1>
                    <p className="locRegion">{location.region}</p>
                    <p className="locCoun">{location.country}</p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      {
        (!loading && newLocation.length === 0 && search !== '') ? <p className="notFound">Search not found</p> : null
      }
      {
        (!loading && search === '') ? <p className="notFound">Nothing to show yet! start typing to begin search</p> : null
      }
    </div>
  );
};

export default AutoForm;
