import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getAllCities from './redux/place/thunk';
import PlaceContainer from './components/place/PlaceContainer';
import WeatherContainer from './components/weather/WeatherContainer';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PlaceContainer />} />
        <Route path="/details/:city" element={<WeatherContainer />} />
      </Routes>
    </>
  );
};

export default App;
