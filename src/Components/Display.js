import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from './Item';

const Display = ({ items = [] }) => (
  <ul className="grid">
    {items.map(({ name, confirmed }) => (
      <li key={name} className="grid-item">
        <Link to={`/country/${name}`}>
          <Item confirmed={confirmed} name={name} />
        </Link>
      </li>
    ))}
  </ul>
);

Display.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)).isRequired,
};

export default Display;
