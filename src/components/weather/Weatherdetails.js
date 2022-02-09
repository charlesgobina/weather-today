import React, { useState } from 'react';
import * as wi from 'weather-icons-react';
import PropTypes from 'prop-types';
import { BiDirections } from 'react-icons/bi';
import { dayImages, nightImages } from './WeatherImages';
import './Weather.css';

const WeatherDetails = (props) => {
  const {
    name, country, time, lon, lat, conditionDesc, precipitation, isDay,
    lastUpdate, conditionImg, pressureMb, windDir, cloud, humidity, tempCelcius,
  } = props;
  let placeHolder = conditionImg;
  let nightHolder;
  if (placeHolder.includes('day')) {
    placeHolder = Array.from(conditionImg);
    placeHolder.splice(0, 39);
    placeHolder = placeHolder.join('').toString();
  } else {
    placeHolder = Array.from(conditionImg);
    placeHolder.splice(0, 41);
    nightHolder = placeHolder;
    nightHolder = nightHolder.join('').toString();
  }

  const [baro] = useState(pressureMb);
  const [temp] = useState(tempCelcius);
  const [prep] = useState(precipitation);
  const [hum] = useState(humidity);
  const blueStyle = {
    color: '#649ed1',
  };
  const orangeStyle = {
    color: '#ffcc00',
  };

  return (
    <div>
      <div className="card">
        <div className="cardHeader">
          <img
            style={{ width: '100px', height: 'auto' }}
            src={isDay === 0 ? nightImages[nightHolder]
              : dayImages[placeHolder]}
            alt="logo"
          />
          <h3>
            {conditionDesc}
          </h3>
        </div>
        <div className="cardTitle">
          <h1>Current Weather Information</h1>
        </div>
        <div className="cardBody">
          <div className="topSection">
            <div className="cityName">
              <h2>
                {name}
                <span className="country">
                  {' '}
                  /
                  {country}
                </span>
              </h2>
              <div className="cityMore">
                <p>
                  Longitude:
                  {lon}
                </p>
                <p>
                  Local Time:
                  {time}
                </p>
                <p>
                  Latitude:
                  {lat}
                </p>
                <p>
                  Lastly Updated:
                  {lastUpdate}
                </p>
              </div>
            </div>
          </div>
          <div className="bottomSection">
            <h3>Weather Parameters</h3>
            <ul>
              <li>
                <wi.WiBarometer
                  style={baro >= 29.6 && baro <= 30.2 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                />
                {' '}
                <p>
                  {pressureMb}
                  {' '}
                  in
                </p>
              </li>
              <li>
                <wi.WiThermometer
                  style={temp >= 20 && temp <= 33 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                />
                {' '}
                <p>
                  {tempCelcius}
                  {' '}
                  °C
                </p>
              </li>
              <li>
                <wi.WiCloud size={50} className="baro" />
                {' '}
                <p>
                  {cloud}
                  %
                </p>
              </li>
              <li>
                <wi.WiHumidity
                  style={hum >= 30 && hum <= 50 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                />
                {' '}
                <p>
                  {humidity}
                  %
                </p>
              </li>
              <li>
                <BiDirections className="bxDir baro" size={40} />
                {' '}
                <p>{windDir}</p>
              </li>
              <li>
                <wi.WiRaindrop
                  style={prep >= 0.10 && prep <= 0.30 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                />
                {' '}
                <p>
                  {precipitation}
                  {' '}
                  in
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  );
};

WeatherDetails.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  lon: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  conditionDesc: PropTypes.string.isRequired,
  precipitation: PropTypes.number.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  pressureMb: PropTypes.number.isRequired,
  tempCelcius: PropTypes.number.isRequired,
  windDir: PropTypes.string.isRequired,
  cloud: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  conditionImg: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  isDay: PropTypes.number.isRequired,
};

export default WeatherDetails;
