import React from 'react';
import './Trending.scss';

import Cactus from '../../assets/cactus.jpg';

import DarkArrow from '../../assets/arrowDark.svg';
import OliveArrow from '../../assets/arrowOlive.svg';

export default function Trending() {
  return (
    <main className='trending'>
      <h2>
        <mark className='olive'>Trending</mark> Categories
      </h2>

      <nav className='trending__selectBar'>
        <ul className='selected'>
          <li>Indoor Plants</li>
          <li>
            <img src={DarkArrow} />
          </li>
        </ul>

        <ul>
          <li>Outdoor plants</li>
          <li>
            <img src={OliveArrow} />
          </li>
        </ul>

        <ul>
          <li>Gardening Kits</li>
          <li>
            <img src={OliveArrow} />
          </li>
        </ul>

        <ul>
          <li>Fertilizers</li>
          <li>
            <img src={OliveArrow} />
          </li>
        </ul>

        <ul>
          <li>Plant care accessory</li>
          <li>
            <img src={OliveArrow} />
          </li>
        </ul>

        <ul>
          <li>Garden Decors</li>
          <li>
            <img src={OliveArrow} />
          </li>
        </ul>
      </nav>

      <section className='trending__cardsSection'>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>{' '}
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>{' '}
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>{' '}
      </section>
    </main>
  );
}
