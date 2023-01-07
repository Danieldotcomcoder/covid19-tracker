/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
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
      Fetching Data ...
    </div>
  );
};

export default Display;
