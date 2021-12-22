import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/countries/countries';
import Display from './Display';
import map from '../assets/europe.png';
import limg from '../assets/back-button.png';
import micimg from '../assets/microphone.png';
import settingimg from '../assets/settings.png';

const Home = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState(null);
  const {
    items, totalConfirmed, loading,
  } = useSelector((state) => ({
    ...state.countries,
    loading: state.loadingBar.default,
  }));
  const continent = 'Europe';

  useEffect(() => {
    dispatch(fetchData(continent));
  }, []);

  const searchHandler = (event) => {
    event.preventDefault();
    const input = event.target.value.toLowerCase().trim();
    const newitems = items.filter((element) => element.name.toLowerCase()
      .includes(input));
    setSearchResult(newitems);
  };

  if (loading) {
    return null;
  }
  return (
    <section>
      <header className="home-main">
        <img src={limg} alt="arrowimage" title="aimg" />
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
        <div className="middle">
          <h5 className="statsbycountry">STATS BY COUNTRY</h5>
          <input placeholder="Search by Country Name" type="search" className="search" onChange={searchHandler} />
        </div>
        {
          (searchResult === null)
            ? <Display items={items} />
            : <Display items={searchResult} />
        }
      </section>
    </section>
  );
};

export default Home;
