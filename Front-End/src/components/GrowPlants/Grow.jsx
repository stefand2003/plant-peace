import React from 'react';
import './Grow.scss';

import Water from '../../assets/water.svg';
import Sun from '../../assets/Sun.svg';
import Fertliser from '../../assets/Fertiliser.svg';

import Pic1 from '../../assets/plants.jpg';
import Square from '../../assets/squarePhoto.jpg';

export default function Grow() {
  return (
    <main className='grow'>
      <div className='grow__header'>
        <ul>
          <li>Steps To Take Care Of Your</li>
          <li>Plants</li>
        </ul>

        <p>
          By following our tips of correct watering, exposing plants to as much
          light as possible and giving them plenty of space for photosynthesis -
          you will get the best results for a healthy plant.
        </p>
      </div>

      <section className='grow__adviceCards'>
        <div className='water'>
          <ul>
            <li>
              <img src={Water} />
            </li>
            <li>Watering</li>
          </ul>
          <p>
            Water your plants when the top inch of soil feels dry to the touch.
            Avoid overwatering, as it can lead to root dehydration.
          </p>
        </div>

        <div className='sun'>
          <ul>
            <li>
              <img src={Sun} />
            </li>
            <li>Sunlight</li>
          </ul>
          <p>
            Most plants need adequate sunlight to thrive. Place your plants in
            areas that receive the appropriate amount of light for their
            specific needs
          </p>
        </div>

        <div className='fertliser'>
          <ul>
            <li>
              <img src={Fertliser} />
            </li>
            <li>Nutrients</li>
          </ul>
          <p>
            Choose a suitable fertilizer based on the specific needs of your
            plants, whether it's a balanced or specialized formula.
          </p>
        </div>
      </section>

      <section className='grow__ourWeb'>
        <img src={Pic1} />
        <img src={Pic1} />
        <div>
          <ul>
            <li>
              <img src={Square} />
            </li>
            <li>
              Our website offers a wide array of stunning plants, ranging from
              vibrant flowers to lush indoor foliage, allowing you to create
              your very own green oasis. In addition to our extensive plant
              selection, we also provide gardening kits and fertilizers to equip
              you with everything you need to nurture your plants and achieve
              gardening success. But we don't stop there! We believe that
              knowledge is the key to a thriving garden, so we offer a wealth of
              information and resources on gardening techniques, plant care
              tips, and landscaping ideas. Whether you're a seasoned gardener or
              just starting your green journey, our goal is to inspire and
              support you every step of the way. Get ready to explore our
              virtual garden and discover the joys of gardening with us!
            </li>
          </ul>
          <button>See more photos</button>
        </div>
      </section>
    </main>
  );
}
