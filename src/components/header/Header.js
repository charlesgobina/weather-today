import React from 'react';
import { BiCog, BiMicrophone } from 'react-icons/bi';
import icon from '../images/day/179.png';
import './Header.css';

const Header = () => (
  <div className="appName">
    <div className="logo">
      <img src={icon} alt="cloud logo" />
      <h1>Weather Today</h1>
    </div>
    <ul className="onlyOne">
      <li>
        <BiCog className="spinningGear" size={30} />
      </li>
      <li>
        <BiMicrophone className="microphone" size={30} />
      </li>
    </ul>
  </div>
);

export default Header;
