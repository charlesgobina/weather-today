import fetchedData from '../mocks/getCities';
import fetchCurrent from '../mocks/getWeather';
import * as red from '../redux/place/placeReducer';
import * as redWeather from '../redux/weather/weatherReducer';
import * as redAuto from '../redux/autoComplete/autoCompleteReducer';

describe('Get all Cities', () => {
  test('It should return undefined if the payload is undefined', () => {
    const action = red.fetchCity();
    const response = { type: 'placeStore/place /FETCH_CITY', payload: undefined };
    expect(action).toEqual(response);
  });
});

describe('Get all Cities', () => {
  test('It should not return undefined if the payload is specified', () => {
    const action = red.fetchCity(fetchedData);
    const response = { type: 'placeStore/place /FETCH_CITY', payload: undefined };
    expect(action).not.toEqual(response);
  });
});

describe('Get all Cities', () => {
  test('It should return object is payload is defined', () => {
    const action = red.fetchCity(fetchedData);
    const response = { type: 'placeStore/place /FETCH_CITY', payload: fetchedData };
    expect(action).toEqual(response);
  });
});

describe('Get current weather condition', () => {
  test('It should return object is payload is defined', () => {
    const action = redWeather.fetchWeather(fetchCurrent);
    const response = { type: 'weatherStore/weather/FETCH_WEATHER', payload: fetchCurrent };
    expect(action).toEqual(response);
  });
});

describe('Get current weather condition', () => {
  test('It should return object is payload is defined', () => {
    const action = redWeather.fetchWeather(fetchCurrent);
    const response = { type: 'weatherStore/weather/FETCH_WEATHER', payload: fetchCurrent };
    expect(action).toEqual(response);
  });
});

describe('Get current weather condition', () => {
  test('It should not return undefined when payload is specified', () => {
    const action = redWeather.fetchWeather(fetchCurrent);
    const response = { type: 'weatherStore/weather/FETCH_WEATHER', payload: undefined };
    expect(action).not.toEqual(response);
  });
});

describe('Get current weather condition', () => {
  test('It should return undefined when payload is undefined', () => {
    const action = redWeather.fetchWeather(undefined);
    const response = { type: 'weatherStore/weather/FETCH_WEATHER', payload: undefined };
    expect(action).toEqual(response);
  });
});

describe('Autocomplete Feature', () => {
  test('It should not return undefined when payload is specified', () => {
    const location = {
      name: 'Loanda',
      country: 'Angola',
      region: 'Cuanza Norte',
    };
    const action = redAuto.autoComplete(location);
    const response = { type: 'autoCompleteStore/autoComplete/GET_AUTOCOMPLETE', payload: undefined };
    expect(action).not.toEqual(response);
  });
});

describe('Autocomplete Feature', () => {
  test('It should return object when payload is defined', () => {
    const location = [{
      name: 'Loanda',
      country: 'Angola',
      region: 'Cuanza Norte',
    }];
    const action = redAuto.autoComplete(location);
    const response = { type: 'autoCompleteStore/autoComplete/GET_AUTOCOMPLETE', payload: location };
    expect(action).toEqual(response);
  });
});

describe('Autocomplete Feature', () => {
  test('It should return undefined when payload is undefined', () => {
    const action = redAuto.autoComplete(undefined);
    const response = { type: 'autoCompleteStore/autoComplete/GET_AUTOCOMPLETE', payload: undefined };
    expect(action).toEqual(response);
  });
});
