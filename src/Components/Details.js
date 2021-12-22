import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCitiesData } from '../Redux/countries/countries';
import img from '../assets/virus.png';
import leftarrow from '../assets/back-button.png';
import micimg from '../assets/microphone.png';
import settingimg from '../assets/settings.png';
import rightarrow from '../assets/right.png';

const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { country, loading } = useSelector((state) => ({
    loading: state.loadingBar.default,
    country: state.countries.selected,
  }));

  useEffect(() => {
    dispatch(fetchCitiesData(name));
  }, []);

  if (loading || !country) {
    return null;
  }
  const { All } = country;
  const list = Object.entries(country).slice(1);

  return (
    <section>
      <header className="home-main">
        <Link to="/">
          <img src={leftarrow} alt="arrowimage" />
        </Link>
        <h5 className="main-title">town/city views</h5>
        <img src={micimg} alt="arrowimage" />
        <div className="pl-5">
          <img src={settingimg} alt="arrowimage" />
        </div>
      </header>
      <div className="banner">
        <div className="banner-left">
          <img src={img} alt="map view" className="App-map" />
        </div>
        <div className="banner-right">
          <h1 className="App-title">{All.country}</h1>
          <p className="App-subtitle">
            {All.confirmed}
             &nbsp;
            Cases
          </p>
        </div>
      </div>
      <section className="Home-stats">
        <h5 className="App-section-title">CITY/TOWN BREAKDOWN - 2021</h5>
        <ul>
          {list.map(([name, { confirmed }]) => (
            <li key={name} className="Details-item">
              <h6 className="Details-item-title">{name}</h6>
              <div className="Details-item-right">
                <p className="App-subtitle">
                  {confirmed}
                  {' '}
                  cases
                </p>
                <img src={rightarrow} alt="arrowimage" className="right-arrow-img" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Details;
