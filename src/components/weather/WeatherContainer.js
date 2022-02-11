import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import getWeather from '../../redux/weather/thunk';
import WeatherDetails from './Weatherdetails';
import Spinner from '../spinners/Spinner';
import './Weather.css';

const WeatherContainer = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const location = useSelector((state) => state.weatherReducer.weather.location);
  const current = useSelector((state) => state.weatherReducer.weather.current);
  const loading = useSelector((state) => state.weatherReducer.loading);

  useEffect(() => {
    dispatch(getWeather(param.city));
  }, [dispatch]);

  return (
    <div className="wrapper">
      { loading ? <Spinner /> : location && current
        && (
          <WeatherDetails
            name={location.name}
            time={location.localtime}
            lon={location.lon}
            lat={location.lat}
            conditionDesc={current.condition.text}
            precipitation={current.precip_in}
            lastUpdate={current.last_updated}
            pressureMb={current.pressure_in}
            tempCelcius={current.temp_c}
            cloud={current.cloud}
            humidity={current.humidity}
            windDir={current.wind_dir}
            country={location.country}
          />
        )}
    </div>
  );
};

export default WeatherContainer;
