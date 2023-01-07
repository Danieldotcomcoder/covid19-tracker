/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable linebreak-style */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from './Item';

const Display = ({ items = [] }) => {
  if (items.length > 0) {
    return (
      <ul className="grid">

        {items.map(({ country, cases }) => (
          <li key={country} className="grid-item">
            <Link to={`/country/${country}`} role="switch">
              <Item confirmed={cases.total} name={country} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      nothing
    </div>
  );
};

export default Display;
