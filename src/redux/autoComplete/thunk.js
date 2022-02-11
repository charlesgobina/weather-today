import { autoComplete, loadingStart } from './autoCompleteReducer';

const apiKey = '6d398d69815e47e89e2131020220702';

const getAutoComplete = (payload, substitute = '/') => async (dispatch) => {
  dispatch(loadingStart(true));
  if (payload === '') {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${substitute}`);
    const finalResponse = await response.json();
    dispatch(autoComplete(finalResponse));
    dispatch(loadingStart(false));
  } else {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${payload}`);
    const finalResponse = await response.json();
    dispatch(autoComplete(finalResponse));
    dispatch(loadingStart(false));
  }
};

export default getAutoComplete;
