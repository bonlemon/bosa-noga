import React from 'react';
import './Links.css';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Links = ({ links }) => {
    return links
        ? links.map(({ key, href, title }) => {
              return (
                  <li key={key} className='nav-item'>
                      <Link className='nav-link' to={href}>
                          {title}
                      </Link>
                  </li>
              );
          })
        : null;
};
Links.propTypes = {
    links: propTypes.array,
};
export default Links;
