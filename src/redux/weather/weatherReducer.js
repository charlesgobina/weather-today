const FETCH_WEATHER = 'weatherStore/weather/FETCH_WEATHER';
const LOADING_START = 'weatherStore/weather/LOADING_START';

const initialState = {
  weather: [],
  loading: false,
};

export const fetchWeather = (payload) => ({
  type: FETCH_WEATHER,
  payload,
});

export const loadingStart = (payload) => ({
  type: LOADING_START,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_WEATHER) {
    return { weather: action.payload };
  } if (action.type === LOADING_START) {
    return { ...state, loading: action.payload };
  }
  return state;
};

export default reducer;
