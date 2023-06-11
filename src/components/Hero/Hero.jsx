import React from 'react';
import './Hero.scss';

import LeftGarden from '../../assets/plantLeft.svg';
import RightArrow from '../../assets/arrowDark.svg';
import HeroImg from '../../assets/Hero.png';

export default function Hero() {
  return (
    <section className='hero'>
      <main className='hero__main'>
        <h3>------ Love for Nature</h3>

        <div className='hero__main--leftInfo'>
          <ul>
            <li>Discover</li>
            <li>Your</li>
            <li>Green</li>
          </ul>
          <h2>Side</h2>

          <p>
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>
        </div>

        <button>Shop now</button>

        <div className='hero__main--gardening'>
          <img src={LeftGarden} className='mainImage' />
          <ul>
            <li>Learn Gardening</li>
            <li>
              <img src={RightArrow} />
            </li>
          </ul>
        </div>
      </main>

      <img src={HeroImg} className='hero__image' />
    </section>
  );
}
