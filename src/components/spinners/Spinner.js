import React from 'react';
import { BiCog } from 'react-icons/bi';
import './Spinner.css';

const Spinner = () => (
  <ul className="spinners loading">
    <li>
      <BiCog className="spinningGear" size={40} />
    </li>
    <li>
      <BiCog className="antiSpin" size={45} />
    </li>
  </ul>
);

export default Spinner;
