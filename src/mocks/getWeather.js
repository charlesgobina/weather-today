import weatherData from './weather';

const fetchCurrent = () => weatherData().then((data) => data);

export default fetchCurrent;
