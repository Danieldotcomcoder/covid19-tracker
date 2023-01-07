import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from './FetchAPI';

const LOAD_COUNTRIES = 'cases/load-countries';

export const loadAllCountries = (payload) => ({
  type: LOAD_COUNTRIES,
  payload,
});

export const fetchData = () => async (dispatch) => {
  dispatch(showLoading());
  const map = await API.getAllCountries();
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
    default:
      return state;
  }
};

export default reducer;
