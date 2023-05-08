import React from 'react';
import './CSS/canteen.css';
import allcomplaint from './images/allcomplaint.png';
import fruits from './images/fruits.png';
import vegetables from './images/vegetables.png';
import nonVeg from './images/nonVeg.png';
import ResultFetch from './ResultFetch.js';

export default function Canteen() {
  return (
    <div className="section">
        <div className="box canteen">
            <div className="text">
                <p className='p1'>COMPLAINTS</p>
                <p className="p2">SHOW COMPLAINTS</p>
            </div>
            <img src={allcomplaint} alt="kitchen"/>
    </div>
        <ResultFetch />
    </div>
  )
}
