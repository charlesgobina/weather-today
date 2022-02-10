import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getAllCities from './redux/place/thunk';
import PlaceContainer from './components/place/PlaceContainer';
import WeatherContainer from './components/weather/WeatherContainer';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PlaceContainer />} />
        <Route path="/details/:city" element={<WeatherContainer />} />
      </Routes>
    </>
  );
};

export default App;
