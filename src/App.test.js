import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import App from './App';

jest.mock('./Redux/countries/FetchAPI.js');

describe('Main Page', () => {
  it('Renders App component', () => {
    const Appcomponent = renderer.create(
      <Provider store={store}>
        <App />
        ,
      </Provider>,
    ).toJSON();
    expect(Appcomponent).toMatchSnapshot();
  });
});
