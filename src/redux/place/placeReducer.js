const FETCH_CITY = 'placeStore/place /FETCH_CITY';

const initialState = [];

export const fetchCity = (payload) => ({
  type: FETCH_CITY,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_CITY) {
    return [...action.payload];
  }
  return state;
};

export default reducer;
