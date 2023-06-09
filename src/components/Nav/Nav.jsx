import React from 'react';
import './Nav.scss';

import Logo from '../../assets/logo.svg';
import Search from '../../assets/search.svg';
import Account from '../../assets/account.svg';
import Bag from '../../assets/bag.svg';

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <img src={Logo} />
        <h4>plantPeace</h4>
      </div>

      <ul className='nav__middleBlock'>
        <li>Home</li>
        <li>Product</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>

      <div className='nav__lastBlock'>
        <img src={Bag} />
        <img src={Search} />
        <img src={Account} />
      </div>
    </nav>
  );
}
