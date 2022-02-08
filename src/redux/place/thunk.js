import { fetchCity } from './placeReducer';

const cityUrl = 'https://countriesnow.space/api/v0.1/countries/capital';

const getAllCities = () => async (dispatch) => {
  const response = await fetch(cityUrl);
  const finalResponse = await response.json();
  dispatch(fetchCity(finalResponse.data));
};

export default getAllCities;
