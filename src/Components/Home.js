import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/countries/countries';
import Display from './Display';
import map from '../assets/europe.png';
import limg from '../assets/back-button.png';
import micimg from '../assets/microphone.png';
import settingimg from '../assets/settings.png';

const Home = () => {
  const continent = 'Europe';

  const dispatch = useDispatch();
  const { items, totalConfirmed, loading } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchData(continent));
    }
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section>
      <header className="App-header">
        <img src={limg} alt="arrowimage" />
        <h4 className="2021"> &nbsp; 2021</h4>
        <h5 className="App-header-title">Most Views</h5>
        <img src={micimg} alt="micropone" />
        <div className="pl-5">
          <img src={settingimg} alt="settings" />
        </div>
      </header>
      <div className="Home-banner">
        <div className="Home-banner-left">
          <img src={map} alt="Banner view" className="App-map" />
        </div>
        <div className="Home-banner-right">
          <h1 className="App-title">{continent}</h1>
          <p className="App-subtitle">
            {totalConfirmed}
            &nbsp; Cases
          </p>
        </div>
      </div>
      <section className="Home-stats">
        <h5 className="App-section-title">STATS BY COUNTRY</h5>
        <Display items={items} />
      </section>
    </section>
  );
};

export default Home;
