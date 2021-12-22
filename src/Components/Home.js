/* eslint-disable no-return-assign */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/countries/countries';
import Display from './Display';
import map from '../assets/europe.png';
import limg from '../assets/back-button.png';
import micimg from '../assets/microphone.png';
import settingimg from '../assets/settings.png';

const Home = () => {
  const dispatch = useDispatch();

  const { items, totalConfirmed } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));
  const continent = 'Europe';

  useEffect(() => {
    dispatch(fetchData(continent));
  }, []);

  return (
    <section>
      <header className="home-main">
        <img src={limg} alt="arrowimage" />
        <h4 className="2021"> &nbsp; 2021</h4>
        <h5 className="main-title">Most Views</h5>
        <img src={micimg} alt="micropone" className="mic-image" />
        <div className="setimg">
          <img src={settingimg} alt="settings" />
        </div>
      </header>
      <div className="home-middle">
        <div className="Home-left">
          <img src={map} alt="Banner view" className="App-map" />
        </div>
        <div className="Home-right">
          <h1 className="cont-name">{continent}</h1>
          <p className="cont-info">
            {totalConfirmed}
            &nbsp; Cases
          </p>
        </div>
      </div>
      <section className="country-info">
        <h5 className="country-down">STATS BY COUNTRY</h5>
        <Display items={items} />
      </section>
    </section>
  );
};

export default Home;
