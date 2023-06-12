import React from 'react';
import './Garden.scss';

import TallPlant from '../../assets/tallPlant.jpg';

export default function Garden() {
  return (
    <main className='garden'>
      <div className='garden__header'>
        <h1>Summer Garden Refresh</h1>
        <h3>"Revitalize Your Garden with a Summer Refresh!"</h3>
      </div>

      <section className='garden__cardSection'>
        <ul>
          <li>
            <img src={TallPlant} />
          </li>
          <li className='header'>Solar Illuminated Planter Granite</li>
          <li className='price'>$139.99</li>
        </ul>

        <ul>
          <li>
            <img src={TallPlant} />
          </li>
          <li className='header'>Solar Illuminated Planter Granite</li>
          <li className='price'>$139.99</li>
        </ul>

        <ul>
          <li>
            <img src={TallPlant} />
          </li>
          <li className='header'>Solar Illuminated Planter Granite</li>
          <li className='price'>$139.99</li>
        </ul>
      </section>

      <section className='garden__subscribe'>
        <div className='GreenCard'>
          <ul className='GreenCard__header'>
            <h1>Subscribe Newsletter</h1>
            <li>
              By following these three steps - proper watering, appropriate
              sunlight, and providing essential nutrients - you'll be well on
              your way to maintaining healthy and thriving plants.
            </li>
          </ul>

          <ul className='GreenCard__enlist'>
            <input type='text' placeholder='Enter your email' />
            <button>Subscribe</button>
          </ul>
        </div>
      </section>
    </main>
  );
}
