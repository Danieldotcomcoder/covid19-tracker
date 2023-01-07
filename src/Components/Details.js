/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../Redux/countries/countries';
import img from '../assets/virus.png';
import leftarrow from '../assets/back-button.png';
import micimg from '../assets/microphone.png';
import settingimg from '../assets/settings.png';
import rightarrow from '../assets/right.png';

const Details = () => {
  const country = useSelector((state) => state.countries.current);
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const data = country.find((item) => item.country === name);
  console.log(data);
  if (data && country) {
    return (
      <section>
        <header className="home-main">
          <Link to="/">
            <img src={leftarrow} alt="arrowimage" />
          </Link>
          <h5 className="main-title">More Information</h5>
          <img src={micimg} alt="arrowimage" className="mic-image" />
          <div className="pl-5">
            <img src={settingimg} alt="arrowimage" />
          </div>
        </header>
        <div className="banner">
          <div className="banner-left">
            <img src={img} alt="map view" className="App-map" />
          </div>
          <div className="banner-right">
            <p className="App-subtitle">
              {data.country}
            </p>
            <p className="App-subtitle">
              Continent:
              {' '}
              {data.continent}

            </p>
            <p className="App-subtitle">
              Population:
              {' '}
              {data.population}
            </p>
          </div>
        </div>
        <section className="Home-stats">
          <h5 className="App-section-title">
            Covid Details for:
            {' '}
            {data.country}
          </h5>
          <ul>
            <li className="cases-list">
              <div>Active: </div>
              <div className="active-cases">{data.cases.active}</div>
            </li>
            <li className="cases-list">
              <div>New: </div>
              <div className="active-cases">{data.cases.new}</div>
            </li>
            <li className="cases-list">
              <div>Critical: </div>
              <div className="active-cases">{data.cases.critical}</div>
            </li>
            <li className="cases-list">
              <div>Recovered: </div>
              <div className="active-cases">{data.cases.recovered}</div>
            </li>
            <li className="cases-list">
              <div>Total: </div>
              <div className="active-cases">{data.cases.total}</div>
            </li>
          </ul>
        </section>
      </section>
    );
  }
  return (
    <div>
      Fetching Data ...
    </div>
  );
};

export default Details;
