/* eslint-disable linebreak-style */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from './FetchAPI';

const LOAD_COUNTRIES = 'cases/load-countries';
const LOAD_COUNTRY = 'cases/load-country';

// Actions
export const loadAllCountries = (payload) => ({
  type: LOAD_COUNTRIES,
  payload,
});

export const loadCountryInfo = (payload) => ({
  type: LOAD_COUNTRY,
  payload,
});

export const fetchCitiesData = (name) => async (dispatch) => {
  dispatch(showLoading());
  const data = await API.getCountryDetails(name);

  dispatch(loadCountryInfo(data));
  dispatch(hideLoading());
};

export const fetchData = () => async (dispatch) => {
  dispatch(showLoading());
  const map = await API.getAllCountries();

  // console.log(map.response.map((item) => console.log(item)));

  dispatch(loadAllCountries(map.response));
  dispatch(hideLoading());
};

const initialState = {
  current: [],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return { current: action.payload };
    case LOAD_COUNTRY:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
