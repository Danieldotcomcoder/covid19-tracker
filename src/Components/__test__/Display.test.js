import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Display from '../Display';

it('Renders Display Component', () => {
  const Displaypage = renderer.create(
    <Provider store={store}>
      <Display />
      ,
    </Provider>,
  ).toJSON();
  expect(Displaypage).toMatchSnapshot();
});
