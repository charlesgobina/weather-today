const GET_AUTOCOMPLETE = 'autoCompleteStore/autoComplete/GET_AUTOCOMPLETE';
const LOADING_START = 'weatherStore/weather/LOADING_START';

const initialState = {
  autoComplete: [],
  loading: false,
};

export const autoComplete = (payload) => ({
  type: GET_AUTOCOMPLETE,
  payload,
});

export const loadingStart = (payload) => ({
  type: LOADING_START,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === GET_AUTOCOMPLETE) {
    return { autoComplete: action.payload };
  } if (action.type === LOADING_START) {
    return { ...state, loading: action.payload };
  }
  return state;
};

export default reducer;
