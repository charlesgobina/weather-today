import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import PlaceContainer from '../components/place/PlaceContainer';
import WeatherContainer from '../components/weather/WeatherContainer';
import Header from '../components/header/Header';
import Spinner from '../components/spinners/Spinner';
import App from '../App';

describe('Testing if App renders correctly', () => {
  test('Testing home page', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing if pages render correctly', () => {
  test('Testing Home page', () => {
    const tree = renderer.create(
      <Router>
        <Provider store={store}>
          <PlaceContainer />
        </Provider>
      </Router>,

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing if pages render correctly', () => {
  test('Testing details page', () => {
    const tree = renderer.create(
      <Router>
        <Provider store={store}>
          <WeatherContainer />
        </Provider>
      </Router>,

    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing if pages render correctly', () => {
  test('Testing Header', () => {
    const tree = renderer.create(
      <Header />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing if pages render correctly', () => {
  test('Testing Spinners', () => {
    const tree = renderer.create(
      <Spinner />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
