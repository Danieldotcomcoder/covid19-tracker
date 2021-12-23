import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Home from '../Home';

it('Renders Home Page', () => {
  const Homepage = renderer.create(
    <Provider store={store}>
      <Home />
      ,
    </Provider>,
  ).toJSON();
  expect(Homepage).toMatchSnapshot();
});
