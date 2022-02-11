import { fetchWeather, loadingStart } from './weatherReducer';

const apiKey = '6d398d69815e47e89e2131020220702';

const getWeather = (payload) => async (dispatch) => {
  dispatch(loadingStart(true));
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${payload}&aqi=no`);
  const finalResponse = await response.json();
  dispatch(fetchWeather(finalResponse));
  dispatch(loadingStart(false));
};

export default getWeather;
