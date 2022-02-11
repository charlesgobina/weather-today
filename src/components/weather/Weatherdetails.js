import React, { useState } from 'react';
import {
  WiBarometer, WiThermometer, WiCloud, WiRaindrop, WiHumidity,
} from 'react-icons/wi';
import PropTypes from 'prop-types';
import {
  BiDirections, BiBrightness, BiChevronLeft, BiChevronRight,
} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import icon from '../images/day/179.png';
import './Weather.css';

const WeatherDetails = (props) => {
  const {
    name, country, time, lon, lat, conditionDesc, precipitation,
    lastUpdate, pressureMb, windDir, cloud, humidity, tempCelcius,
  } = props;

  const navigate = useNavigate();
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
      <div className="controlMenu">
        <ul className="controls">
          <li>
            <button className="controlBtn oneBtn" type="button">
              <BiChevronLeft
                onClick={() => navigate('/')}
                data-for="main"
                data-tip="Go back"
                size={40}
              />
            </button>
          </li>
          <li>
            <button className="controlBtn twoBtn" type="button">
              <BiChevronRight size={40} />
            </button>
          </li>
          <li>
            <button className="controlBtn threeBtn" type="button">
              <BiBrightness data-for="main" data-tip="Dark Mode" size={40} />
            </button>
          </li>
        </ul>
        <ul />
      </div>
      <div className="card">
        <div className="cardHeader">
          <img
            src={icon}
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
                <WiBarometer
                  style={baro >= 29.6 && baro <= 30.2 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                  data-tip="Pressure"
                  data-for="main"
                />
                {' '}
                <p>
                  {pressureMb}
                  {' '}
                  in
                </p>
              </li>
              <li>
                <WiThermometer
                  style={temp >= 20 && temp <= 33 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                  data-tip="Temperature"
                  data-for="main"
                />
                {' '}
                <p>
                  {tempCelcius}
                  {' '}
                  °C
                </p>
              </li>
              <li>
                <WiCloud size={50} className="baro" data-for="main" data-tip="Cloud coverage" />
                {' '}
                <p>
                  {cloud}
                  %
                </p>
              </li>
              <li>
                <WiHumidity
                  style={hum >= 30 && hum <= 50 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                  data-tip="Humidity"
                  data-for="main"
                />
                {' '}
                <p>
                  {humidity}
                  %
                </p>
              </li>
              <li>
                <BiDirections className="bxDir baro" data-for="main" data-tip="Wind direction" size={40} />
                {' '}
                <p>{windDir}</p>
              </li>
              <li>
                <WiRaindrop
                  style={prep >= 0.10 && prep <= 0.30 ? blueStyle
                    : orangeStyle}
                  size={50}
                  className="baro"
                  data-tip="Precipitation"
                  data-for="main"
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
      <ReactTooltip
        id="main"
        place="top"
        type="light"
        effect="float"
        multiline={false}
      />
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
  country: PropTypes.string.isRequired,
};

export default WeatherDetails;
