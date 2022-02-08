import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAllCities from './redux/place/thunk';
import PlaceContainer from './components/place/placeContainer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <>
      <p>Hello World</p>
      <PlaceContainer />
    </>
  );
};

export default App;
