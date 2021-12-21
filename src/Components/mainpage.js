import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks, SEARCH_STOCK } from '../Redux/stocks/stocks';

function MainPage() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);

  const searchhandler = (text) => {
    dispatch(SEARCH_STOCK(text));
  };

  useEffect(() => {
    dispatch(getStocks());
  }, []);

  return (
    <div>
      <h3>Search Filter</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => searchhandler(e.target.value)}
      />
      {
        stocks
          .map((element) => (
            <ul key={element}>
              <li>
                <h4>
                  {' '}
                  { element.symbol }
                  {' '}
                </h4>
                { element.name}
                { element.price }
                <img src={element.image} alt="img" />
              </li>
            </ul>
          ))
      }
    </div>
  );
}

export default MainPage;
