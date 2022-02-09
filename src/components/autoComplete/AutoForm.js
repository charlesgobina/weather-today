import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import getAutoComplete from '../../redux/autoComplete/thunk';

const AutoForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('Yaounde');
  const newLocation = useSelector((state) => state.autoCompleteReducer.autoComplete);
  const loading = useSelector((state) => state.autoCompleteReducer.loading);
  const navigate = useNavigate();
  console.log(newLocation);

  useEffect(() => {
    dispatch(getAutoComplete(search));
  }, [search]);

  return (
    <div className="search">
      <form>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter a Location" />
        <button type="submit">Search</button>
      </form>
      {loading ? <p>Searching...</p>
        : (
          <div className="searchResults">
            { newLocation && newLocation.map((location) => (
              <button type="button" key={uuidv4()} onClick={() => navigate(`/details/${location.name}`)}>
                <div className="locationInfo">
                  <h1>{location.name}</h1>
                  <p>{location.region}</p>
                  <p>{location.country}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      {
        (!loading && newLocation.length === 0) ? <p>Search not found</p> : null
      }
    </div>
  );
};

export default AutoForm;
