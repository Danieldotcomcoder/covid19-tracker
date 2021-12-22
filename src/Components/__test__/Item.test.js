import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Item from '../Item';

it('Renders item component', () => {
  const itemcomponent = renderer.create(
    <Provider store={store}>
      <Item />
      ,
    </Provider>,
  ).toJSON();
  expect(itemcomponent).toMatchSnapshot();
});
