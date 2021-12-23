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

export const fetchData = (continent) => async (dispatch) => {
  dispatch(showLoading());
  const map = await API.getAllCountries(continent);

  const Info = Object.values(map).reduce((accumulator, Value) => {
    const { All: { country, confirmed } } = Value;

    accumulator.items.push({ name: country, confirmed });
    accumulator.totalConfirmed += confirmed;

    return accumulator;
  }, {
    totalConfirmed: 0,
    items: [],
  });

  Info.items = Info.items.sort((a, b) => b.confirmed - a.confirmed);

  dispatch(loadAllCountries(Info));
  dispatch(hideLoading());
};

const initialState = {
  totalConfirmed: 0,
  items: [],
  selected: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return action.payload;
    case LOAD_COUNTRY:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
