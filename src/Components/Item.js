import PropTypes from 'prop-types';
import img from '../assets/virus.png';
import rimg from '../assets/right.png';

const Item = ({ confirmed, name }) => (
  <div className="Home-item-content">
    <div className="item-image">
      <img src={rimg} alt="right-arrow" />
    </div>
    <div className="Home-item-top">
      <img src={img} alt="virus view" className="Home-item-image" />
    </div>
    <div className="Home-item-bottom">
      <h2 className="country-name">{name}</h2>
      <h5 className="country-cases">{confirmed}</h5>
    </div>
  </div>
);

Item.propTypes = {
  confirmed: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
