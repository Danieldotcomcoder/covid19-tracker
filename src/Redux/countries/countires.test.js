import reducer, { loadAllCountries, loadCountryInfo } from './countries';

test('test the initial state', () => {
  const initialState = {
    totalConfirmed: 0,
    items: [],
    selected: null,
  };

  const newState = reducer(undefined, {});

  expect(newState).toEqual(initialState);
});

test('test adding countries', () => {
  const prevState = {
    totalConfirmed: 0,
    items: [],
  };
  const items = [
    { country: 'Testing country 1', confirmed: 3 },
    { country: 'Testing country 2', confirmed: 2 },
  ];

  const newState = reducer(prevState, loadAllCountries({
    items,
    totalConfirmed: 5,
  }));

  expect(newState).toEqual({
    totalConfirmed: 5,
    items,
  });
});

test('should handle adding selected country', () => {
  const prevState = {
    totalConfirmed: 0,
    items: [],
    selected: null,
  };
  const data = {
    All: {
      country: 'Testing',
    },
  };

  const newState = reducer(prevState, loadCountryInfo(data));

  expect(newState).toEqual({
    totalConfirmed: 0,
    items: [],
    selected: data,
  });
});
