import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Details from '../Details';

it('Renders Details component', () => {
  const Detailscomponent = renderer.create(
    <Provider store={store}>
      <Details />
      ,
    </Provider>,
  ).toJSON();
  expect(Detailscomponent).toMatchSnapshot();
});
