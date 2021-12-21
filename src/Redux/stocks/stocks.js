/* eslint-disable max-len */
import FetchStocks from './FetchAPI';

const FETCH_DATA = 'FETCH_DATA';
const SEARCH_DATA = 'SEARCH_DATA';
const initialState = [];

export const GET_DATA = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const SEARCH_STOCK = (value) => ({
  type: SEARCH_DATA,
  value,
});

export const getStocks = () => (dispatch) => {
  FetchStocks.getStocks().then((res) => {
    dispatch(
      GET_DATA(
        res.map((element) => ({
          id: element.id,
          symbol: element.symbol,
          name: element.name,
          price: element.current_price,
          image: element.image,
        })),
      ),
    );
  });
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case SEARCH_DATA: {
      const { value } = action;
      if (value === '') {
        return state;
      }
      const newstate = state.filter((e) => e.name.toLowerCase().includes(value.toLowerCase()));
      return [state, {
        name: newstate,
      }];
    }
    default:
      return state;
  }
};

export default stockReducer;
