import React from 'react';
import './Hero.scss';

import RightArrow from '../../assets/arrowDark.svg';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hero() {
  const [intro, setIntro] = useState({});
  const [gardening, setGardening] = useState({});
  const [hero, setHero] = useState({});

  const getHeroData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/hero', {
        params: {
          'populate[intro]': true,
          'populate[gardening][populate][image]': true,
          'populate[hero]': true,
        },
      });

      const { intro, gardening, hero } = response?.data?.data?.attributes;

      setIntro(intro);
      setGardening(gardening);
      setHero(hero);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    getHeroData();
  }, []);
  console.log('hero', hero);
  console.log('intro', intro);
  console.log('gardening', gardening);

  return (
    <section className='hero'>
      <main className='hero__main'>
        <h3>------{intro.header1}</h3>

        <div className='hero__main--leftInfo'>
          <ul>
            <li>{intro.header2}</li>
          </ul>
          <h2>Side</h2>

          <p>{intro.description}</p>
        </div>

        <button>{intro.button}</button>

        <div className='hero__main--gardening'>
          <img
            src={`http://localhost:1337${gardening?.image?.data?.attributes?.url}`}
            className='mainImage'
          />
          <ul>
            <li>{gardening.gardeningTitle}</li>
            <li>
              <img src={RightArrow} />
            </li>
          </ul>
        </div>
      </main>

      <img
        src={`http://localhost:1337${hero?.data?.attributes?.url}`}
        className='hero__image'
      />
    </section>
  );
}
