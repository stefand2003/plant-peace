import './Nav.scss';
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  // create our State variables
  const [logo, setLogo] = useState({});
  const [links, setLinks] = useState([]);
  const [icons, setIcons] = useState([]);

  //connect our React to BackEnd = synchronise it together = sync === async
  const getNavData = async () => {
    // try to wait for axios to get the data from backEnd
    try {
      const response = await axios.get('http://localhost:1337/api/nav', {
        params: {
          'populate[logo][populate][image]': true,
          'populate[links]': true,
          'populate[icons][populate][image]': true,
        },
      });

      //destructure the date by going from biggest to smallest function
      //response ---> {} (this is in postman) --->  "data" ---> "attributes")
      const { logo, links, icons } = response.data?.data?.attributes;

      // fill up the state with the data received from BackEnd
      setLogo(logo);
      setLinks(links);
      setIcons(icons);

      // catch and allow the error fetching data to display what you called already(error)
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  //call useEffect => first, second, third
  useEffect(() => {
    getNavData(); // call NavData when screen loads
  }, []); // call it only once, because of the empty array []

  return (
    <nav className='nav'>
      <Link to={logo?.url} className='nav__logo'>
        <img
          src={`http://localhost:1337${logo?.image?.data?.attributes?.url}`}
        />
        <h4>{logo?.companyName}</h4>
      </Link>

      <ul className='nav__middleBlock'>
        {links?.map((link) => (
          <li key={link.id}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className='nav__lastBlock'>
        {icons?.map((icon) => (
          <Link key={icon.id} to={icon.url}>
            <img
              src={`http://localhost:1337${icon?.image?.data?.attributes?.url}`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
